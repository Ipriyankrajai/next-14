"use client";
import React, { useMemo, useState } from "react";
import { StationType } from "../../types";
import Link from "next/link";
import { asdOrder, dcsOrder, limit } from "@/utils";

type Props = {
  data: StationType[];
};
const Table: React.FC<Props> = ({ data }) => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(0);
  const [query, setQuery] = useState("");
  const [_, setRerender] = useState("");

  const totalDocs = data.length ?? 0;
  const totalPages = Math.ceil(totalDocs / limit);
  const hasNext = page + 1 <= totalPages ? true : false;
  const hasPrevious = page - 1 > 0 ? true : false;

  const tableValue = useMemo(() => {
    let sortedData = [...data];
    if (sort === -1) {
      sortedData?.sort(dcsOrder);
    } else if (sort === 1) {
      sortedData?.sort(asdOrder);
    } else {
      sortedData = [...data];
    }
    const newData = sortedData?.filter((val) => {
      const lowerCaseName = val?.name?.toLocaleLowerCase();
      return lowerCaseName?.includes(query?.toLocaleLowerCase());
    });
    const startIndex = (page - 1) * limit;
    const displayData = newData?.slice(startIndex, startIndex + limit);
    return displayData;
  }, [page, data, query, sort]);

  return (
    <div>
      <div className="flex gap-3 flex-wrap p-5">
        <input
          type="text"
          placeholder="Search"
          className="border border-black rounded h-[40px] p-1 w-[450px]"
          value={query}
          onChange={(e) => {
            setQuery(e?.target?.value);
            setPage(1);
          }}
        />
        <div>
          <select
            id="sort"
            className="border text-sm rounded-lg block w-full p-2.5 bg-black placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => {
              setSort(Number(e.target.value));
            }}
          >
            <option selected={sort === 0} value={0}>
              Default
            </option>
            <option selected={sort === 1} value={1}>
              Ascending order
            </option>
            <option selected={sort === -1} value={-1}>
              Descending order
            </option>
          </select>
        </div>
      </div>
      {tableValue && tableValue?.length ? (
        <>
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {!query?.length ? (
            <div className=" flex gap-2 mx-[20px] my-[20px]">
              <button disabled={!hasPrevious} onClick={() => setPage(page - 1)}>
                Previous
              </button>
              {page} of {totalPages}
              <button disabled={!hasNext} onClick={() => setPage(page + 1)}>
                Next
              </button>
            </div>
          ) : null}
        </>
      ) : (
        <div className="p-5 font-medium">No Result found</div>
      )}
    </div>
  );
};

export default Table;
