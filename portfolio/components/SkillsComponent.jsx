import Image from "next/image";
import React from "react";
import { FaDumbbell } from "react-icons/fa";
import ToolSkills from "./ToolSkills";

export default function SkillsComponent() {
  return (
    <div className="flex flex-col gap-5">
      <div className="p-12 flex flex-col gap-4">
        <div className="border rounded-3xl flex items-center justify-center gap-2 p-1 w-48 border-gray-700">
          <button className="">
            <FaDumbbell size={20} color="white" />
          </button>
          <h1>TECHNICAL SKILLS</h1>
        </div>
        <h1 className="text-5xl">Technologies</h1>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg[#131313] border border-gray-700 rounded-3xl">
            <h1 className="border rounded-3xl p-1 ml-[80%] mt-4 w-14 text-center border-gray-700">
              95%
            </h1>
            <div className="flex items-center gap-6 ml-8 mb-2">
              <Image
                className="w-16 h-16"
                width={300}
                height={300}
                src="/python.png"
                alt=" python"
              />
              <h1 className="text-2xl">Python</h1>
            </div>
            <div className="bg-[#323232] w-[80%] h-1 ml-10 rounded-md">
              <div className="bg-[#FFFFFF] w-[95%] h-1 rounded-md"></div>
            </div>
          </div>
          <div className="bg[#131313] border border-gray-700 rounded-3xl">
            <h1 className="border rounded-3xl p-1 ml-[80%] mt-4 w-14 text-center border-gray-700">
              85%
            </h1>
            <div className="flex items-center gap-6 ml-8 mb-2">
              <Image
                className="w-16 h-16"
                width={300}
                height={300}
                src="/postgreSQL.png"
                alt=" postgreSQL"
              />
              <h1 className="text-2xl">PostgreSQL</h1>
            </div>
            <div className="bg-[#323232] w-[80%] h-1 ml-10 rounded-md">
              <div className="bg-[#FFFFFF] w-[85%] h-1 rounded-md"></div>
            </div>
          </div>
          <div className="bg[#131313] border border-gray-700 rounded-3xl">
            <h1 className="border rounded-3xl p-1 ml-[80%] mt-4 w-14 text-center border-gray-700">
              80%
            </h1>
            <div className="flex items-center gap-6 ml-8 mb-2">
              <Image
                className="w-16 h-16"
                width={300}
                height={300}
                src="/azure.png"
                alt=" azure"
              />
              <h1 className="text-2xl">Microsoft Azure</h1>
            </div>
            <div className="bg-[#323232] w-[80%] h-1 ml-10 rounded-md">
              <div className="bg-[#FFFFFF] w-[80%] h-1 rounded-md"></div>
            </div>
          </div>
          <div className="bg[#131313] border border-gray-700 rounded-3xl">
            <h1 className="border rounded-3xl p-1 ml-[80%] mt-4 w-14 text-center border-gray-700">
              75%
            </h1>
            <div className="flex items-center gap-6 ml-8 mb-2">
              <Image
                className="w-16 h-16"
                width={300}
                height={300}
                src="/aws.png"
                alt=" aws"
              />
              <h1 className="text-2xl">Cloud: AWS</h1>
            </div>
            <div className="bg-[#323232] w-[80%] h-1 ml-10 rounded-md">
              <div className="bg-[#FFFFFF] w-[75%] h-1 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ToolSkills />
      </div>
    </div>
  );
}
