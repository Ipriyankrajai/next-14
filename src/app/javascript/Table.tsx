"use client";
import React, { useMemo, useState } from "react";
import { StationType } from "../../types";
import Link from "next/link";
import { asdOrder, dcsOrder, limit } from "@/utils";
import TableFormat from "./TableFormat";
import CardFormat from "./CardFormat";

type Props = {
  data: StationType[];
};
const Table: React.FC<Props> = ({ data }) => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(0);
  const [query, setQuery] = useState("");

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
      <div className="table-top-wrap">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={query}
          onChange={(e) => {
            setQuery(e?.target?.value);
            setPage(1);
          }}
        />
        <div>
          <select
            id="sort"
            className="select-sort "
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
      <div
        style={{
          overflow: "hidden",
        }}
      >
        <div
          style={{
            overflow: "auto",
          }}
        >
          {tableValue && tableValue?.length ? (
            <>
              <div className="table-main-wrap">
                <TableFormat tableValue={tableValue} />
              </div>
              <div className="card-main-wrap">
                <CardFormat tableValue={tableValue} />
              </div>
              {!query?.length ? (
                <div className="paginatioon-wrap">
                  <button
                    disabled={!hasPrevious}
                    onClick={() => setPage(page - 1)}
                  >
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
            <div className="no-result">No Result found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
