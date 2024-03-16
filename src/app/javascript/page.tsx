import React from "react";
import Table from "./Table";

async function getData() {
  const res = await fetch("https://api.irail.be/stations?format=json", {
    next: { revalidate: 3600 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Javascript = async () => {
  const data = await getData();
  console.log("data", data?.station?.[0]);

  return (
    <div className="pt-[50px]">
      {data ? <Table data={data?.station} /> : <>Loading</>}
    </div>
  );
};

export default Javascript;
