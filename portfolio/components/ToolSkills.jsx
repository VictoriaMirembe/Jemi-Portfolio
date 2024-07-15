import Image from "next/image";
import React from "react";
import { TbSettingsCog } from "react-icons/tb";

export default function ToolSkills() {
  return (
    <div>
      <div className="p-12 flex flex-col gap-4">
        <div className="border rounded-3xl flex items-center justify-center gap-2 p-1 w-48 border-gray-700">
          <button className="">
            <TbSettingsCog size={20} color="white" />
          </button>
          <h1>TOOL SKILLS</h1>
        </div>
        <h1 className="text-5xl">Took Stack</h1>
        <div className="bg-slate-800 rounded-full ">
          <div className="bg-green-700 rounded-full w-[75%]">
            <div className="bg-black rounded-full w-[50%] m-8">
              <Image
                width={300}
                height={300}
                src="/vs code.png"
                alt="vscode"
                className=""
              />
              <h1>75%</h1>
            </div>
          </div>
          <h1>Confluence</h1>
        </div>
      </div>
      <div>
        <h1 className="border-purple-500 border p-2 rounded-full text-white">
          {" "}
          Ball
        </h1>
      </div>
    </div>
  );
}
