import { useState } from "react";
function ShiftBorder(props) {
  return <div className="shift-border">{props.children}</div>;
}

export const ShiftListItem = (props) => {
  const { name, start, end } = props;

  const startMinutes = Date.parse(start);
  const endMinutes = Date.parse(end);
  const totalMinutesWorked = endMinutes / 60000 - startMinutes / 60000;
  const wages = (totalMinutesWorked / 60) * 150;
  return (
    <>
      <ul className="shift-info">
        <ShiftBorder>
          <li>{name.toUpperCase()}</li>
          <li>{start}</li>
          <li>{end}</li>
          <li>{totalMinutesWorked} Minutes</li>
          <li>{wages} kr</li>
        </ShiftBorder>
      </ul>
    </>
  );
};
