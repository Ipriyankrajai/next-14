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
    </>
  );
};

export default CenterAdiv;
