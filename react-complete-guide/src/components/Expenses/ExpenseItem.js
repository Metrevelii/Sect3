import React from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// Adding new component -- expense item
// We need parameter to adjust Dynamic data (data-attributes) to elements. for that we use - props object
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

// to use the component, we should export it. and import it to main JS file -- App.js this time
export default ExpenseItem;
