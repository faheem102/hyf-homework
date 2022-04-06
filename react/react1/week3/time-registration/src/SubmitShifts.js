import { useEffect, useState } from "react";
import "./shifts.css";
import { ShiftListItem } from "./ShiftOverview";

function FancyBorder(props) {
  return <div className="fancy-border">{props.children}</div>;
}
export function SubmitShifts({ fetchUrl }) {
  const [list, setList] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [startInput, setStartInput] = useState("");
  const [endInput, setEndInput] = useState("");
  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then(setList);
  }, []);
  const addShift = () => {
    const newId = new Date().getTime();
    const newTodo = {
      name: nameInput,
      start: startInput,
      end: endInput,
      id: newId,
    };
    setList((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };
  console.log(list);
  const display = list.map((shift) => (
    <ShiftListItem
      name={shift.name}
      start={shift.start}
      end={shift.end}
      key={shift.newId}
    />
  ));
  const searchEmployee = (e) => {
    const value = e.target.value.toLowerCase();
    const searchName = list.filter((shift) =>
      shift.name.toLowerCase().includes(value)
    );
    setList(searchName);
  };

  const FormPart = (
    <div>
      <h2>Submit Shift</h2>
      <form>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        ></input>
        <label>Start Time</label>
        <input
          type="datetime-local"
          value={startInput}
          onChange={(e) => setStartInput(e.target.value)}
        ></input>
        <label>End Time</label>
        <input
          type="datetime-local"
          value={endInput}
          onChange={(e) => setEndInput(e.target.value)}
        ></input>
      </form>
      <button className="button" onClick={addShift}>
        Save Shift
      </button>
    </div>
  );
  const ShiftsPart = (
    <>
      <h2>Shift Overview</h2>
      <input
        type="text"
        className="search-input"
        placeholder="Search for employee..."
        onChange={searchEmployee}
      />

      {display}
    </>
  );
  return (
    <>
      <FancyBorder>{FormPart}</FancyBorder>

      <FancyBorder>{ShiftsPart}</FancyBorder>
    </>
  );
}
