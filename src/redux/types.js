export const ActionTypeList = {
  ADD_CALL: "ADD_CALL",
  DELETE_CALL: "DELETE_CALL",
};

export const initialState = {
  calls: JSON.parse(localStorage.getItem("calls")) || [],
};
