import React from "react";

export default function Intro(project) {
  console.log(project);
  return (
    <div className={`aspect-square p-4 row-span-2 col-span-2`}>
      <h1 className="font-bold text-[64px] hover:font-normal duration-300 ease-in-out">
        {project.title}
      </h1>
      {project.description}
    </div>
  );
}
