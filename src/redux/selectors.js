import { getCurrentTime } from "../helpers/date";

export const getCalls = (state) => state.calls;

export const getNextCall = (state) => {
  const currentTime = getCurrentTime();
  return state.calls
    .sort((a, b) => (a.time > b.time ? 1 : a.time === b.time ? 0 : -1))
    .filter((call) => call.time > currentTime)[0];
};
