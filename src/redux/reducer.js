import { ActionTypeList, initialState } from "./types";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypeList.ADD_CALL:
      return {
        ...state,
        calls: [...state.calls, action.payload],
      };

    case ActionTypeList.DELETE_CALL:
      return {
        ...state,
        calls: state.calls.filter((call) => call.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
