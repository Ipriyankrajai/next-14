import React from "react";

const CenterAdiv = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-gray-500 h-[100vh]">
        Center div using flex
      </div>
      <div className="grid place-items-center bg-red-500 h-[100vh]">
        Center div using grid
      </div>
      <div className="relative bg-slate-400 h-[100vh]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-lightblue p-8">
          Center div using position absolute
        </div>
      </div>
    </>
  );
};

export default CenterAdiv;
