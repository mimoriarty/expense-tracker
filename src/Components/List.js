import { useContext, useState } from "react";
import { unit } from "../constants";
import Modal from "./Modal";

import { expensesContext } from "../App";

export default function List() {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalToggle = () => setModalVisible(!modalVisible);
  const { expenses } = useContext(expensesContext);

  return(
    <div>
      {/* <Modal
        isVisible={modalVisible}
        toggleFn={handleModalToggle}
      /> */}
      <div className="list margin--vh">
        <legend className="pure-menu-heading">Expenses list</legend>
        <ul>
          {expenses.map(expense => <li
            key={expense.id}
            className="pure-g expense-item"
          >
            <p className="pure-u-3-4">{expense.title}</p>
            <p className="pure-u-1-4 list-amount">{unit} {(expense.amount && Number(expense.amount).toFixed(2))}</p>
          </li>)}
        </ul>
      </div>
    </div>
  );
}