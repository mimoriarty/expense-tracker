import { useContext, useState } from 'react';

import { expensesReducer } from "../reducers/expensesReducer";
import { expensesContext } from '../App';
import List from '../Components/List';
import Modal from '../Components/Modal';
import Form from '../Components/Form';

export default function ListRoute() {
  const { expenses, formValues, setFormValues, toggleReload } = useContext(expensesContext);
  const [ modifyModalVisible, setModifyModalVisible ] = useState(false);

  const toggleModifyModalVisibility = () => {
    setModifyModalVisible(!modifyModalVisible);
  };
  const onHandleEdit = (expense) => {
    setFormValues(expense);
    toggleModifyModalVisibility();
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    expensesReducer({
      type: 'updateExpense',
      payload: formValues
    });
    toggleModifyModalVisibility();
    toggleReload();
  };
  const onHandleDelete = () => {
    expensesReducer({
      type: 'deleteExpense',
      payload: formValues.id
    });
    toggleReload();
  };

  return (
    <>
      <Modal
        title='Nodify expense'
        isVisible={modifyModalVisible}
        toggleFn={toggleModifyModalVisibility}
        >
        <Form
          editMode={true}
          handleSubmit={onHandleSubmit}
          handleDelete={onHandleDelete}
        />
      </Modal>
      <List
        title='Expenses list'
        list={expenses}
        editMode={true}
        handleEdit={onHandleEdit}
      />
    </>
  );
}