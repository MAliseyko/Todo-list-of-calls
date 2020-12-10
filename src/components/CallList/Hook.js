import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCurrentTime } from "../../helpers/date";
import { getCalls } from "../../redux/selectors";

const filters = (currentTime) => ({
  all: () => true,
  next: (call) => call.time > currentTime,
  finished: (call) => call.time < currentTime,
});

const sortByOrder = (key, order) => (firstCall, secondCall) => {
  const directionMutiplier = order === "asc" ? 1 : -1;

  if (firstCall[key] > secondCall[key]) {
    return directionMutiplier;
  }

  if (firstCall[key] < secondCall[key]) {
    return -directionMutiplier;
  }

  return 0;
};

export const useSortedCalls = () => {
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState(["time", "asc"]);

  const calls = useSelector(getCalls);
  const currentTime = getCurrentTime();

  const handleSortOrderChange = (key, order = "asc") => {
    setSortOrder([key, order === "asc" ? "desc" : "asc"]);
  };

  const sortedCalls = calls
    .filter(filters(currentTime)[filter])
    .sort(sortByOrder(...sortOrder));

  useEffect(() => {
    localStorage.setItem("calls", JSON.stringify(calls));
  }, [calls]);

  return { sortOrder, setFilter, handleSortOrderChange, sortedCalls };
};
