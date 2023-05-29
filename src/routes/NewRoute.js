import { useContext, useState } from 'react';
import Modal from '../Components/Modal';
import Form from '../Components/Form';
import List from '../Components/List';

import { expensesContext } from '../App';
import { expensesReducer } from '../reducers/expensesReducer';

export default function NewRoute() {
  const { formValues, expenses, toggleReload } = useContext(expensesContext);
  const [newModalVisible, setNewModalVisible] = useState(false);

  const toggleNewModalVisibility = () => {
    setNewModalVisible(!newModalVisible);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    expensesReducer({
      type: 'addExpense',
      payload: formValues
    });
    toggleNewModalVisibility();
    toggleReload();
  };

  return(
    <>
      <Modal
        title='Add Expense'
        isVisible={newModalVisible}
        toggleFn={toggleNewModalVisibility}
        >
        <Form handleSubmit={onHandleSubmit} />
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