import { useContext } from 'react';
import Modal from '../Components/Modal';
import New from '../Components/New';
import List from '../Components/List';

import { expensesContext } from '../App';
import { expensesReducer } from '../reducers/expensesReducer';

export default function NewRoute() {
  const { expenses, newModalVisible, toggleNewModalVisibility } = useContext(expensesContext);

  return(
    <>
      <Modal
        title='Add Expense'
        isVisible={newModalVisible}
        toggleFn={toggleNewModalVisibility}
      >
        <New />
      </Modal>
      <div className="adder margin--t-lng">
        <p><span className="adder-icon" onClick={toggleNewModalVisibility}>+</span></p>
        <p className="adder-text">new expense</p>
      </div>
      <List
        title='Last expenses'
        list={expensesReducer({ type: 'lastExpenses', payload: { expenses, size: 3 }})}
      />
    </>
  );
}