import { ActionTypeList } from "./types";

export const addCall = (call) => ({
  type: ActionTypeList.ADD_CALL,
  payload: call,
});

export const deleteCall = (id) => ({
  type: ActionTypeList.DELETE_CALL,
  payload: id,
});
