"use client";

import { cn } from "@/lib/utils";
import { Images } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ViewPhotos = ({
  photos,
  className,
  title,
}: {
  photos: string[];
  className?: string;
  title: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={(val) => setIsOpen(val)}>
      <DialogTrigger asChild>
        <TooltipProvider delayDuration={50}>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.button
                className={cn("relative group text-5xl", className)}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setIsOpen(true)}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    tap: { opacity: 0 },
                    hover: {
                      opacity: 1,
                    },
                  }}
                  transition={{ duration: 0.1 }}
                  className="absolute inset-0 rounded-md -z-50 bg-black"
                />
                <motion.div
                  variants={{
                    hover: {
                      x: 4,
                      y: -4,
                    },
                    tap: {
                      x: 0,
                      y: 0,
                    },
                  }}
                  transition={{ duration: 0.1 }}
                  className="p-1 md:p-2 rounded-md border border-black/30 bg-white transition-colors"
                >
                  <Images className="size-5 md:size-7" />
                </motion.div>
              </motion.button>
            </TooltipTrigger>
            <TooltipContent
              className="tracking-wide"
              side="top"
              sideOffset={10}
            >
              View images
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="px-12 py-2">
          <Carousel>
            <CarouselContent>
              {photos.map((photo, index) => (
                <CarouselItem className="h-72" key={index}>
                  <img
                    className="object-cover w-full h-full"
                    src={photo}
                    alt={`Image ${index}`}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {photos.length > 1 && (
              <>
                <CarouselPrevious />
                <CarouselNext />
              </>
            )}
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewPhotos;
