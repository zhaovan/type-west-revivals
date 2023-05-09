import Link from "next/link";
import React, { useEffect, useState } from "react";
import files from "../../assets/files.json";
import { useRouter } from "next/router";
// import { server } from "../../config/index.js";
// import getImageFiles from "../api/getImageFiles";
import Image from "next/image";

function isObjectEmpty(obj) {
  console.log(obj);
  return Object.keys(obj).length === 0;
}

export default function ProjectTemplate() {
  const [project, setProject] = useState({});
  const [text, setText] = useState();
  const router = useRouter();

  const { slug } = router.query;

  useEffect(() => {
    async function getFile() {
      const markdownFile = `/${slug}/text.md`;
      const response = await fetch(markdownFile);
      const data = await response.text();
      setText(data);
    }
    if (slug) {
      setProject(files[slug]);

      getFile();
    }
  }, [slug]);

  return (
    <div>
      <div className="mx-16 my-8">
        <Link href="/">
          <h1 className="text-[64px] font-bold">Type West 2023</h1>
        </Link>
      </div>
      <div className="m-16 flex">
        <div className="w-1/2">
          <div className="fixed">
            <h1 className="font-bold text-[32px]">
              {slug && slug.slice(0, 1).toUpperCase() + slug.slice(1)}
            </h1>
            <p className="whitespace-pre fixed">{text}</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-1/2">
          {!isObjectEmpty(project) &&
            project.images.map((image, idx) => {
              return (
                <Image
                  key={idx}
                  src={`/${slug}/${image}`}
                  alt=""
                  width={800}
                  height={200}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
