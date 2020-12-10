import React from "react";
import { useDispatch } from "react-redux";
import { addCall } from "../../redux/actionCreators";
import "./AddCall.css";

const data = {
  name: "",
  phoneNumber: "",
  time: "",
};
const keys = Object.keys(data);

function AddCall() {
  const dispatch = useDispatch();
  const handleAddCall = (event) => {
    event.preventDefault();
    const newData = Array.from(event.target).reduce(
      (acc, curr) =>
        !keys.includes(curr.name) ? acc : { ...acc, [curr.name]: curr.value },
      data
    );
    const number = newData.phoneNumber
      .replace(/\(?\)?-? ?/g, "")
      .replace("+", "00");
    const phoneNumber =
      `${number.substr(0, 5)} ${number.substr(5, 3)}` +
      ` ${number.substr(8, 3)} ${number.substr(11, 3)}`;
    dispatch(
      addCall({ ...newData, id: Math.random().toString(32), phoneNumber })
    );
    event.target.reset();
  };

  return (
    <div className="add-call">
      <h3>Add call</h3>
      <div className="add-call__details">
        <form onSubmit={handleAddCall}>
          <input
            required
            name="name"
            className="add-call__info"
            placeholder="Name"
            maxlength="30"
          ></input>
          <input
            required
            name="phoneNumber"
            className="add-call__info"
            placeholder="Phone number"
            type="tel"
            pattern="([+]|[0]{2})\(?\d{3}\)? ?-?\d{3} ?\d{3} ?\d{3} ?"
          ></input>
          <input
            required
            name="time"
            className="add-call__info"
            placeholder="Time"
            pattern="\d{2}:\d{2}"
          ></input>
          <div>
            <span>Add</span>
            <button type="submit">+</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCall;
