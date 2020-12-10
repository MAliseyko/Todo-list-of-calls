export const getCalls = (state) => state.calls;

export const getNextCall = (state) =>
  state.calls.sort((a, b) =>
    a.time > b.time ? 1 : a.time === b.time ? 0 : -1
  )[0];
