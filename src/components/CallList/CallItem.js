import React from "react";
import { useDispatch } from "react-redux";
import { deleteCall } from "../../redux/actionCreators";

function CallItem({ call }) {
  const dispatch = useDispatch();
  const currentDate = new Date();
  const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
  const handleDeleteCall = () => {
    dispatch(deleteCall(call.id));
  };
  return (
    <tr>
      <td>{call.name}</td>
      <td>{call.phoneNumber}</td>
      <td>{call.time}</td>
      <td onClick={handleDeleteCall}>delete</td>
      <td>
        <input
          type="checkbox"
          checked={currentTime > call.time}
          disabled
        ></input>
      </td>
    </tr>
  );
}

export default CallItem;
