"use client";

import { projectData } from "@/data/project-info";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

// Reference: https://www.embla-carousel.com/examples/predefined/

export const ProjectCarousel = ({
  project: { images, video },
}: {
  project: (typeof projectData)[keyof typeof projectData];
}) => {
  return (
    <div className="h-72 lg:flex-grow lg:h-auto mt-10 lg:mt-0">
      <div className="aspect-video xl:max-w-[80vw] w-full px-10 py-10">
        <Carousel className="ring-black ring-2 ring-opacity-25 rounded-lg ring-offset-2">
          <CarouselContent>
            <CarouselItem key={video[0].src}>
              <video
                loop
                muted
                controls
                className="w-full h-full object-cover rounded-lg"
              >
                <source type={video[0].mime} src={video[0].src}></source>
              </video>
            </CarouselItem>
            {images.map((image) => (
              <CarouselItem key={image.src}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
