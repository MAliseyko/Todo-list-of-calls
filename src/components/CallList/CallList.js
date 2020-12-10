import React from "react";
import Button from "../Button/Button";
import CallItem from "./CallItem";
import "./CallList.scss";
import { useSortedCalls } from "./Hook";

const getSortIcon = (sortOrder, name) => {
  if (sortOrder[0] !== name) {
    return "";
  }

  return sortOrder[1] === "asc" ? "▲" : "▼";
};

function CallList() {
  const {
    sortOrder,
    setFilter,
    handleSortOrderChange,
    sortedCalls,
  } = useSortedCalls();
  return (
    <div className="call-list">
      <table className="call-list__table">
        <tbody>
          <tr>
            <th
              className="call-list__table__header"
              onClick={() => handleSortOrderChange("name", sortOrder[1])}
            >
              Name
              {getSortIcon(sortOrder, "name")}
            </th>
            <th className="call-list__table__header">Phone number</th>
            <th
              className="call-list__table__header"
              onClick={() => handleSortOrderChange("time", sortOrder[1])}
            >
              Time
              {getSortIcon(sortOrder, "time")}
            </th>
            <th className="call-list__table__header"></th>
            <th className="call-list__table__header"></th>
          </tr>
          {sortedCalls.map((call) => (
            <CallItem call={call} key={call.id} />
          ))}
        </tbody>
      </table>
      <div className="calls-filters">
        <Button onClick={() => setFilter("all")}>All</Button>
        <Button onClick={() => setFilter("next")}>Next</Button>
        <Button onClick={() => setFilter("finished")}>Finished</Button>
      </div>
    </div>
  );
}

export default CallList;
