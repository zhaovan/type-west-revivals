import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Project(project) {
  const [hover, setHover] = useState(false);

  const hrefLink = `/projects/${project.title.toLowerCase()}`;

  const random = Math.random();
  let animationStart;
  let animationEnd;

  const val = random * 2500;

  animationStart = { x: -val, y: -val * 0.75 };
  animationEnd = { x: 0, y: 0 };

  animationStart["scale"] = 0.5;
  animationEnd["scale"] = 1;

  return (
    <motion.div
      className="perspective-1000"
      initial={animationStart}
      animate={animationEnd}
      transition={{ ease: "easeInOut", duration: random + 0.1 }}
    >
      <Link href={hrefLink}>
        {/* flip card inner */}
        <div className="hover:rotate-y-180 transform-style-3d duration-700 text-center relative w-full h-full">
          {/* flip card front */}
          <div
            className={`flex justify-center items-center aspect-square border-black border-2 bg-contain  ${
              project.span !== undefined &&
              `row-span-${project.span} col-span-${project.span}`
            }`}
          >
            <Image src={project.thumbnail} alt={project.title} fill={true} />
          </div>

          {/* flip card back */}
          <div className="backface-hidden absolute top-0 rotate-y-180 h-full w-full backdrop-blur-lg ">
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 text-xl font-bold text-blue-900">
              {project.designer}
            </h2>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
