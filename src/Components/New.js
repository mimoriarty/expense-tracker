import { useContext } from "react";
import { expensesContext } from "../App";
import { expensesReducer } from "../reducers/expensesReducer";

export default function New() {
  const { formValues, handleFormChange, toggleReload } = useContext(expensesContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    expensesReducer({ type: 'addExpense', payload: formValues });
    toggleReload();
  };

  return (
    <div className="margin--vh">
      <form className="pure-form pure-form-stacked">
        <fieldset>
          <div className="margin--b-med">
            <label forhtml="title">Title</label>
            <input type="text" name="title" value={formValues.title} onChange={(e) => handleFormChange(e)} />
            {/* <span className="pure-form-message">This is a required field.</span> */}
          </div>
          <div className="margin--b-med">
            <label forhtml="description">Description</label>
            <input type="text" name="description" />
          </div>
          <div className="margin--b-med">
            <label forhtml="amount">Amount</label>
            <input
              type="text"
              name="amount"
              value={formValues.amount}
              pattern="^\d{1,10}\.?\d{0,6}$"
              onChange={(e) => handleFormChange(e)}
            />
          </div>
          <div className="margin--b-med">
            <label forhtml="date">Date</label>
            <input type="datetime-local" name="date" />
          </div>
          <div className="margin--b-med">
            <label forhtml="category">Category</label>
            <input type="text" name="category" />
          </div>
          <button
            className="pure-button pure-button-primary"
            onClick={handleSubmit}
          >
            Add
          </button>
        </fieldset>
      </form>
    </div>
  );
}