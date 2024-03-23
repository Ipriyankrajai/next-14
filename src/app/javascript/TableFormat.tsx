import { StationType } from "@/types";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  tableValue: StationType[];
};
const TableFormat: React.FC<Props> = ({ tableValue }) => {
  const [_, setRerender] = useState("");
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {tableValue.map((st) => (
            <tr key={st?.id}>
              <td>
                <Link
                  href={`https://maps.google.com/?q=${st?.locationY},${st?.locationX}`}
                  target="_blank"
                  className="underline"
                >
                  {st?.name}
                </Link>
              </td>
              <td>{st?.locationY}</td>
              <td>{st?.locationX}</td>
              <td>
                {/* Temp uncontrolled component */}
                <input
                  className="input-notes"
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableFormat;
