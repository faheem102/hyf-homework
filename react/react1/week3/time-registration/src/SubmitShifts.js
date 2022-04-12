import { useEffect, useState } from "react";
import "./shifts.css";
import { ShiftListItem } from "./ShiftOverview";

function FancyBorder(props) {
  return <div className="fancy-border">{props.children}</div>;
}

const FormPart = ({ list, setList }) => {
  const [nameInput, setNameInput] = useState("");
  const [startInput, setStartInput] = useState("");
  const [endInput, setEndInput] = useState("");
  const addShift = () => {
    const newId = new Date().getTime();
    const newTodo = {
      name: nameInput,
      start: startInput,
      end: endInput,
      id: newId,
    };
   
    setList({
      original: [...list.original, newTodo],
      filtered: list.original,
    });
  };
  return (
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
};

const ShiftsPart = ({ list, setList }) => {
  const [searchValue, setSearchValue] = useState("");

  const searchEmployee = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);
    const searchName = list.original.filter((shift) =>
      shift.name.toLowerCase().includes(value)
    );
    setList({
      original: list.original,
      filtered: searchName,
    });
  };
  return (
    <>
      <h2>Shift Overview</h2>
      <input
        autoFocus
        type="text"
        //className="search-input"
        placeholder="Search for employee..."
        onChange={searchEmployee}
        value={searchValue}
      />
    </>
  );
};

const ListShifts = ({ list }) => {
  // We only print the filtered Pokemons
  if (list) {
    return list.map((shift) => (
      <ShiftListItem
        name={shift.name}
        start={shift.start}
        end={shift.end}
        key={shift.newId}
      />
    ));
  }
};

export function SubmitShifts({ fetchUrl }) {
  const [list, setList] = useState({ original: [], filtered: [] });

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        setList({
          original: data,
          filtered: data,
        });
      });
  }, []);

  return (
    <>
      <FancyBorder>
        <FormPart list={list} setList={setList} />
      </FancyBorder>

      <FancyBorder>
        <ShiftsPart list={list} setList={setList} />

        <ListShifts list={list.filtered}></ListShifts>
      </FancyBorder>
    </>
  );
}
