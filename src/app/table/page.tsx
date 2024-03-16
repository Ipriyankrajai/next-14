import React from "react";

const Table = () => {
  const iterationArray = new Array(12).fill(1);
  return (
    <div className="bg-white min-h-[100vh] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[50px] pt-[100px] pb-[50px] px-[50px]">
      {iterationArray?.map((a, index) => (
        <div
          key={index}
          className="border border-black relative magic-wrap min-h-[100px]"
        >
          Header {index + 1}
          <div className="absolute right-[-37px] top-[-16px] border border-gray-500 p-1 bg-gray-400 magic-tooltip">
            Tooltip {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
