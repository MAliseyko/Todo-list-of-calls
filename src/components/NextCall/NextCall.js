import React from "react";
import { useSelector } from "react-redux";
import { getNextCall } from "../../redux/selectors";
import "./NextCall.scss";

function NextCall() {
  const nextCall = useSelector(getNextCall);
  return (
    <div className="next-call">
      <h3>Next call</h3>
      <div className="next-call__details">
        <span className="next-call__name next-call__info">
          {nextCall?.name || "Name"}
        </span>
        <span className="next-call__number next-call__info">
          {nextCall?.phoneNumber || "Phone Number"}
        </span>
        <span className="next-call__time next-call__info">
          {nextCall?.time || "time"}
        </span>
      </div>
    </div>
  );
}

export default NextCall;
