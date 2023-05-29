import { unit } from "../constants";

export default function List({ title, list, editMode, handleEdit }) {

  return(
    <div>
      <div className={'list margin--vh ' + (editMode ? 'editable' : '')}>
        <legend className="pure-menu-heading">{title}</legend>
        <ul>
          {list.length > 0 && list.map(expense => <li
            key={expense.id}
            className="pure-g expense-item"
            onClick={() => editMode && handleEdit(expense)}
          >
            <p className="pure-u-3-4">{expense.title}</p>
            <p className="pure-u-1-4 list-amount">{unit} {(expense.amount && Number(expense.amount).toFixed(2))}</p>
          </li>)}
        </ul>
        {list.length === 0 && <p style={{ textAlign: 'center' }}>No expenses to show. Try adding some!</p>}
      </div>
    </div>
  );
}