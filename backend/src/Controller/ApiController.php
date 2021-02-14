<?php

namespace App\Controller;

use App\Entity\Courses;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;



class ApiController extends AbstractController
{

    public $jsonResponse;

    public $headers = [
        "Content-Type" => "application/json",
        "Access-Control-Allow-Origin" => "*"
    ];

    public $em;

    public $serializer;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->jsonResponse =  new JsonResponse('', 200, $this->headers, true);
        $this->em = $entityManager;

        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];

        $this->serializer = new Serializer($normalizers, $encoders);
    }
    /**
     * @Route("/api", name="api")
     */
    public function index(Request $request): JsonResponse
    {

        $this->jsonResponse->setContent(json_encode([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/ApiController.php',
        ]));

        return $this->jsonResponse;
    }


    /**
     * @Route("/api/getCourse/{courseId}", name="get_course")
     */
    public function getCourse(Request $request, int $courseId): JsonResponse
    {
        $course = $this->em->getRepository(Courses::class)->findOneBy(["id" => $courseId]);
        $jsonContent = $this->serializer->serialize($course, 'json');
        $this->jsonResponse->setJson($jsonContent);

        return $this->jsonResponse;
    }
}
