<?php

namespace App\Repository;

use App\Entity\SubCources;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method SubCources|null find($id, $lockMode = null, $lockVersion = null)
 * @method SubCources|null findOneBy(array $criteria, array $orderBy = null)
 * @method SubCources[]    findAll()
 * @method SubCources[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SubCourcesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SubCources::class);
    }

    // /**
    //  * @return SubCources[] Returns an array of SubCources objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?SubCources
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
