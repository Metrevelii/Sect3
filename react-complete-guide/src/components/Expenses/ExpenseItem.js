// import other pieces from react library
import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// Adding new component -- expense item
// We need parameter to adjust Dynamic data (data-attributes) to elements. for that we use - props object
const ExpenseItem = (props) => {
  // hooks must be called inside directal functions
  // useState returns array where first value is variable itself (value) and second is updating function
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    // title = 'Updated!';
    setTitle("Updated!");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

// to use the component, we should export it. and import it to main JS file -- App.js this time
export default ExpenseItem;
