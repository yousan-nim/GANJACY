import React from "react";

import LangsBar from "./langsbar";

const index = () => {
  return (
    <div className="w-full h-auto">
      <LangsBar />

      <div className="w-full h-[8vh] bg-white border-[1px] border-gray-100 justify-between flex px-4">
        <button className="flex items-center justify-center text-xl font-bold">
          <img src="./logos/Ganjacy.png" />
        </button>

        <div className="flex items-center justify-center gap-6 text-lg font-bold text-green-700">
          <button>HOME</button>
          <button>ORDER</button>
          <button>STRAIN FINDER</button>
          <button>BUZZ</button>
          <button>DISPENSARIES</button>
          <button>HEALCARE & CULTURE</button>
        </div>
      </div>
    </div>
  );
};

export default index;
