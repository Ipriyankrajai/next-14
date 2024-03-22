import { StationType } from "@/types";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  tableValue: StationType[];
};
const CardFormat: React.FC<Props> = ({ tableValue }) => {
  const [_, setRerender] = useState("");
  return (
    <div className="card-wrap">
      {tableValue.map((st) => (
        <div key={st?.id} className="card">
          <div className="card-label-wrap">
            <div className="label">Name:</div>
            <Link
              href={`https://maps.google.com/?q=${st?.locationY},${st?.locationX}`}
              target="_blank"
              className="underline"
            >
              {st?.name}
            </Link>
          </div>
          <div className="card-label-wrap">
            <div className="label">Latitude:</div>
            <div>{st?.locationY}</div>
          </div>
          <div className="card-label-wrap">
            <div className="label">Longitude:</div>
            <div>{st?.locationX}</div>
          </div>
          <div className="card-label-wrap">
            <div className="label">Notes:</div>
            <input
              className="border border-black rounded h-[30px] p-1"
              value={
                (typeof window !== "undefined" &&
                  localStorage?.getItem(st?.id)) ||
                ""
              }
              onChange={(e) => {
                localStorage.setItem(st?.id, e?.target?.value);
                setRerender(e?.target?.value);
              }}
              type="text"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
{
  /* <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead> */
}

export default CardFormat;
