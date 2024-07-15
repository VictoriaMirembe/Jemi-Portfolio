"use client";
import { BsPersonFillCheck } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { GoSun } from "react-icons/go";
import { FaDumbbell } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { MdOutlineHouseSiding } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import { GrLinkedin } from "react-icons/gr";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";

export default function SideBarComponent() {
  return (
    <div className="w-full h-screen gap-3 flex ">
      <div className="h-full flex flex-col gap-3">
        <div className="  ">
          <button className="py-3 px-4 rounded-[3.8rem] bg-[#111111]">
            <FiMenu size={25} color="white" />
          </button>
        </div>
        <div className="  ">
          <button className="py-4 px-5 rounded-[3.8rem] bg-[#111111]">
            <GoSun size={22} color="white" />
          </button>
        </div>

        <div className="h-[80%] w-[4rem] bg-[#1A1A1A] rounded-full flex flex-col items-center  gap-1">
          <button className="p-4">
            <BsPersonFillCheck size={24} color="78CC6D" />
          </button>
          <button className="p-4">
            <FaDumbbell size={24} color="white" />
          </button>
          <button className="p-4">
            <FaTools size={24} color="white" />
          </button>
          <button className="p-4">
            <FaBriefcase size={24} color="white" />
          </button>
          <button className="p-4">
            <MdOutlineHouseSiding size={24} color="white" />
          </button>
          <button className="p-4">
            <GrArticle size={24} color="white" />
          </button>
          <button className="p-4">
            <FaTelegramPlane size={24} color="white" />
          </button>
        </div>
      </div>
      <div className=" flex flex-col gap-[1.49rem] items-center  w-[80%] bg-[#121212] h-full  rounded-tr-none rounded-[2rem]">
        <Image
          src="/jemi.jpeg"
          alt="image"
          width={300}
          height={300}
          className="h-64 w-64 mt-10 object-cover rounded-3xl rounded-tr-none"
        />
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-[#6CB562]">FRONTEND DEVELOPER</h3>
          <h1 className="text-white text-2xl">Ssekajja Victoria</h1>
        </div>
        <div className="flex gap-3">
          <button className="p-5 border-gray-700 rounded-2xl border-[0.5px] ">
            <GrLinkedin size={15} color="white" />
          </button>
          <button className="p-5 border-gray-700 rounded-2xl border-[0.5px]">
            <FaInstagramSquare size={15} color="white" />
          </button>
          <button className="p-5 border-gray-700 rounded-2xl border-[0.5px]">
            <BsTwitterX size={15} color="white" />
          </button>
          <button className="p-5 border-gray-700 rounded-2xl border-[0.5px]">
            <FaSquareGithub size={15} color="white" />
          </button>
        </div>
        <div className="text-white w-full flex  justify-center">
          <p className="border-gray-800 border-[0.5px] border-b-0 border-l-0 p-5">
            Download CV
          </p>
          <p className="border-gray-800 border-[0.5px] border-b-0 border-r-0 p-5">
            Contact Me
          </p>
        </div>
      </div>
    </div>
  );
}
