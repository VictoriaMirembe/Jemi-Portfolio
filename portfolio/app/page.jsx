import AboutComponent from "@/components/AboutComponent";
import SkillsComponent from "@/components/SkillsComponent";

export default function Home() {
  return (
    <main className="min-h-screen w-full text-white pb-10">
      <div className="bg-[#1C1C1C] rounded-tr-[2rem] ">
        <AboutComponent />
      </div>
      <br></br>
      <div className="bg-[#1C1C1C]">
        <SkillsComponent />
      </div>
      <br></br>
      <div className="bg-[#1C1C1C] h-[20%]">Services</div>
      <br></br>
      <div className="bg-[#1C1C1C] h-[20%]">Projects</div>
      <br></br>
      <div className="bg-[#1C1C1C] h-[20%]">Resume</div>
      <br></br>
      <div className="bg-[#1C1C1C] h-[20%]">Articles</div>
      <br></br>
      <div className="bg-[#1C1C1C] h-[20%] rounded-[2rem] rounded-tl-none rounded-tr-none ">
        Contact
      </div>
      <br></br>
      <br></br>
    </main>
  );
}
