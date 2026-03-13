"use client"

import { Project } from "@/lib/types/project/types"
import { ProjectCard } from "./project-card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface ProjectsCarouselProps {
    projects: Project[]
}

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full"
        >
            <CarouselContent>
                {projects.map((project) => (
                    <CarouselItem
                        key={project._id}
                        className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                    >
                        <ProjectCard project={project} />
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}