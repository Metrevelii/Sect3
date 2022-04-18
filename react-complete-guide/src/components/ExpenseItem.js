import "./ExpenseItem.css";

// Adding new component -- expense item
// We need parameter to adjust Dynamic data (data-attributes) to elements. for that we use - props object
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

// to use the component, we should export it. and import it to main JS file -- App.js this time
export default ExpenseItem;
