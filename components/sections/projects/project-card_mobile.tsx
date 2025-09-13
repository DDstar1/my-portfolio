"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Globe } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  githubLink?: string;
  previewLink: string;
};

type Props = {
  project: Project;
  i: number;
  className?: string;
  progress: MotionValue<number>; // 👈 from useScroll in parent
  range: [number, number]; // 👈 scroll slice
  targetScale: number; // 👈 scale factor when scrolled
};

export default function ProjectCardMobile({
  project,
  i,
  className,
  progress,
  range,
  targetScale,
}: Props) {
  const cardContainer = useRef<HTMLDivElement>(null);
  const imageContainer = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  useMotionValueEvent(scale, "change", (latest) => {
    console.log(`📊 Project "${project.title}" scale:`, latest);
  });

  return (
    <motion.div
      ref={cardContainer}
      className={`w-full h-fit max-w-[650px] rounded-2xl bg-muted border sticky ${
        className ?? ""
      }`}
      style={{ top: `calc(5vh + ${i * 35}px)`, scale }}
    >
      <div className="flex justify-between flex-shrink-0 px-4 pt-2">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Globe size={18} />
          <span>Web-Page</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="block rounded-full size-3 bg-green-500 ml-auto" />
          <span className="block rounded-full size-3 bg-yellow-500" />
          <span className="block rounded-full size-3 bg-red-500" />
        </div>
      </div>

      <div className="group relative h-[200px] overflow-hidden cursor-pointer rounded-lg m-2 border">
        <div ref={imageContainer} key={project.title} className="w-full h-full">
          <Image
            className="size-full object-cover object-top"
            src={project.image}
            alt={project.title}
            width={400}
            height={400}
          />
        </div>

        <Link
          href={project.previewLink}
          target="_blank"
          className="size-full bg-black/50 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity"
        />
        <ExternalLink
          size={24}
          className="absolute top-4 right-4 opacity-90 hidden group-hover:block text-white"
        />
      </div>

      <div className="px-4 py-2 w-full">
        <h2 className="text-xl capitalize font-bold my-3">{project.title}</h2>
        <p className="text-muted-foreground h-[150px] overflow-hidden whitespace-pre-line">
          {project.description}
        </p>
        <div className="space-x-2 my-7">
          <Button asChild variant="secondary">
            <Link href={project.previewLink} target="_blank">
              Live view
            </Link>
          </Button>
          {project.githubLink && (
            <Button asChild variant="ghost" className="bg-muted-foreground/10">
              <Link href={project.githubLink} target="_blank">
                GitHub
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
