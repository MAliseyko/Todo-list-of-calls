import React from "react";
import { useDispatch } from "react-redux";
import { getCurrentTime } from "../../helpers/date";
import { deleteCall } from "../../redux/actionCreators";
import Button from "../Button/Button";

function CallItem({ call }) {
  const dispatch = useDispatch();
  const currentTime = getCurrentTime();
  const handleDeleteCall = () => {
    dispatch(deleteCall(call.id));
  };
  return (
    <tr>
      <td className="call-list__table__cell call-list__table__name">
        {call.name}
      </td>
      <td className="call-list__table__cell call-list__table__number">
        {call.phoneNumber}
      </td>
      <td className="call-list__table__cell call-list__table__time">
        {call.time}
      </td>
      <td className="call-list__table__cell">
        <Button onClick={handleDeleteCall}>Delete</Button>
      </td>
      <td className="call-list__table__cell">
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
