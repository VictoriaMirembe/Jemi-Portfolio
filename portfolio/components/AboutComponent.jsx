import React from "react";

export default function AboutComponent() {
  return (
    <div className="p-12 flex flex-col gap-7">
      <h2 className="text-3xl">
        Hello, I'm <span className="text-[#78CC6D]">Ssekajja Victoria</span>
      </h2>
      <h1 className="text-6xl leading-20">
        Frontend Developer and <br></br>
        <span className="bg-[#78CC6D] text-[#0C0C0C] text-[3rem] rounded-full px-2 font-bold">
          UI/UX designer
        </span>{" "}
        based in <br></br>
        Kampala,Uganda.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
        dolorum<br></br> consequuntur! Quaerat odio dolorem sit consequatur
        voluptatum enim itaque<br></br> sapiente at eum neque quod consectetur,
        quidem cum molestias, iure explicabo!
      </p>
      <div className="flex gap-16 pb-4">
        <div className="flex items-center gap-3">
          <h1 className="text-7xl">04</h1>
          <p className="text-1xl">
            Completed<br></br>Projects
          </p>
        </div>
        <div className="flex items-center gap-3">
          <h1 className="text-7xl">1.5</h1>
          <p className="text-1xl">
            Years<br></br>Experience
          </p>
        </div>
        <div className="flex items-center gap-3">
          <h1 className="text-7xl">01</h1>
          <p className="text-1xl">
            Awards<br></br>Winning
          </p>
        </div>
      </div>
    </div>
  );
}
