import Image from "next/image";
import { Inter } from "next/font/google";
import Projects from "../assets/projects.json";
// import Instructors from "../assets/projects.json";
import Intro from "@/components/Intro";

import Project from "@/components/Project";
import Teacher from "@/components/Teacher";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function Home() {
  const [data, setData] = useState(Projects);

  useEffect(() => {
    shuffleArray(data);
    setData([...data]);
  }, []);

  const introProject = {
    title: "Type West 2023",
    description:
      "Type West is a postgraduate certificate program in type design available in-person in San Francisco or online to students worldwide. Geared toward graphic design professionals who wish to expand their typographic toolboxes by learning the tools and techniques necessary to create original typefaces, the yearlong program is tailored to the needs of recent graduates, working designers, and other professionals who interact with type and typography regularly but would like to deepen their knowledge in a supportive and challenging academic environment.",
  };

  return (
    <main>
      <div className="grid grid-cols-4 gap-4 m-4 ">
        <Intro {...introProject} />
        {data.length > 0 &&
          data.map((project, idx) => {
            if (project.type === "teacher") {
              return <Teacher key={idx} {...project} />;
            } else {
              return <Project key={idx} {...project} />;
            }
          })}
      </div>
    </main>
  );
}
