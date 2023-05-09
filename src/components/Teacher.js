import React, { useState } from "react";
import Image from "next/image";

export default function Teacher({ description, thumbnail }) {
  const [expand, setExpand] = useState(false);
  return (
    <div
      className={`${expand ? "row-span-2" : ""} bg-blue-200 p-4 cursor-pointer`}
      onClick={() => setExpand(!expand)}
    >
      <h1 className="text-center font-bold text-[32px]">Instructor</h1>
      <div
        className={`${
          expand ? "w-1/2 h-1/4" : "w-1/2 h-1/2"
        } relative mx-auto mb-4`}
      >
        <Image
          src={thumbnail}
          alt=""
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>

      {expand ? (
        description
      ) : (
        <p className="font-bold text-center text-xl">
          {description.split(" ").slice(0, 2).join(" ")}
        </p>
      )}
    </div>
  );
}
