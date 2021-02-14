<?php

namespace App\Entity;

use App\Repository\SubCourcesRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SubCourcesRepository::class)
 */
class SubCources
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity=Courses::class, inversedBy="subCources")
     * @ORM\JoinColumn(nullable=false)
     */
    private $mainCourse;

    /**
     * @ORM\Column(type="string", length=1000)
     */
    private $shortInfo;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getMainCourse(): ?Courses
    {
        return $this->mainCourse;
    }

    public function setMainCourse(?Courses $mainCourse): self
    {
        $this->mainCourse = $mainCourse;

        return $this;
    }

    public function getShortInfo(): ?string
    {
        return $this->shortInfo;
    }

    public function setShortInfo(string $shortInfo): self
    {
        $this->shortInfo = $shortInfo;

        return $this;
    }
}
