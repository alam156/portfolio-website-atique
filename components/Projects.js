import React from "react";
import userData from "@constants/data";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              text = {proj.text}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, text, number }) => {
  return (
      <div className="relative">

        <div className="h-72 object-cover">
            <h1 className="text-gray-50 font-bold text-xl bg-blue-300 rounded-md px-2">
                {title}
            </h1>
            <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                {number.length === 1 ? "0" + number : number}
            </h1>
          {/*<img*/}
          {/*  src={imgUrl}*/}
          {/*  alt="portfolio"*/}
          {/*  className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"*/}
          {/*/>*/}
        </div>

          <div className="absolute top-10 left-30 list-decimal text-black-50 font-bold text-sm">
              <br/>
              <br/>
              <div>
                  <h4>
                      <br/>
                      {text}
                  </h4>
                  <br/>
                  <Link href={link} style={{color: "blue"}}>Find the paper</Link>
              </div>

              <br/>
              <br/>
          </div>


      </div>
  );
};
