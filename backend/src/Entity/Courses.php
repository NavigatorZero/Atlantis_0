<?php

namespace App\Entity;

use App\Repository\CoursesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CoursesRepository::class)
 */
class Courses
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
     * @ORM\Column(type="string", length=1000)
     */
    private $shortDescription;

    /**
     * @ORM\Column(type="string", length=10000)
     */
    private $longDescription;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $cost;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $achivments = [];

    /**
     * @ORM\OneToMany(targetEntity=SubCources::class, mappedBy="mainCourse", orphanRemoval=true)
     */
    private $subCources;

    public function __construct()
    {
        $this->subCources = new ArrayCollection();
    }

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

    public function getShortDescription(): ?string
    {
        return $this->shortDescription;
    }

    public function setShortDescription(string $shortDescription): self
    {
        $this->shortDescription = $shortDescription;

        return $this;
    }

    public function getLongDescription(): ?string
    {
        return $this->longDescription;
    }

    public function setLongDescription(string $longDescription): self
    {
        $this->longDescription = $longDescription;

        return $this;
    }

    public function getCost(): ?int
    {
        return $this->cost;
    }

    public function setCost(?int $cost): self
    {
        $this->cost = $cost;

        return $this;
    }

    public function getAchivments(): ?array
    {
        return $this->achivments;
    }

    public function setAchivments(?array $achivments): self
    {
        $this->achivments = $achivments;

        return $this;
    }

    /**
     * @return Collection|SubCources[]
     */
    public function getSubCources(): Collection
    {
        return $this->subCources;
    }

    public function addSubCource(SubCources $subCource): self
    {
        if (!$this->subCources->contains($subCource)) {
            $this->subCources[] = $subCource;
            $subCource->setMainCourse($this);
        }

        return $this;
    }

    public function removeSubCource(SubCources $subCource): self
    {
        if ($this->subCources->removeElement($subCource)) {
            // set the owning side to null (unless already changed)
            if ($subCource->getMainCourse() === $this) {
                $subCource->setMainCourse(null);
            }
        }

        return $this;
    }
}
