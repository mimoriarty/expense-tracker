import { useContext } from "react";
import { expensesContext } from "../App";

export default function Form({ editMode, handleDelete, handleSubmit }) {
  const { formValues, handleFormChange } = useContext(expensesContext);

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
            <input
              type="text"
              name="description"
              value={formValues.description}
              onChange={(e) => handleFormChange(e)}
            />
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
            <input
              type="datetime-local"
              name="date"
              value={formValues.date}
              onChange={(e) => handleFormChange(e)}
            />
          </div>
          <div className="margin--b-med">
            <label forhtml="category">Category</label>
            <input
              type="text"
              name="category"
              value={formValues.category}
              onChange={(e) => handleFormChange(e)}
            />
          </div>
          {editMode ?
            <div className="button-group">
              <button
                className="pure-button pure-button-primary"
                onClick={handleSubmit}
              >
                Save
              </button>
              <button
                className="pure-button remove-data"
                onClick={handleDelete}
              >
                Remove
              </button>
            </div> :
            <button
              className="pure-button pure-button-primary"
              onClick={handleSubmit}
            >
              Add
            </button>
          }
        </fieldset>
      </form>
    </div>
  );
}