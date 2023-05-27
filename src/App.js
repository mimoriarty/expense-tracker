import { createContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Layout/Header';
import NewRoute from './routes/NewRoute';
import ListRoute from './routes/ListRoute';
import SummaryRoute from './routes/SummaryRoute';
import { getExpenses } from './services/expenses';
import { expensesReducer } from './reducers/expensesReducer';

import './App.css';

export const expensesContext = createContext();
const defaultFormValues = {
  title: '',
  description: '',
  category: '',
  date: '',
  amount: '',
};

function App() {
  const [expenses, setExpenses] = useState([]);
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [reload, setReload] = useState(false);
  const [newModalVisible, setNewModalVisible] = useState(false);
  const [summary, setSummary] = useState(0);
  const handleFormChange = (e) => {
    const { value, name } = e.target;
    
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const toggleReload = () => {
    setReload(!reload);
    setFormValues(defaultFormValues);
  };
  const toggleNewModalVisibility = () => {
    setNewModalVisible(!newModalVisible);
  }

  useEffect(() => {
    getExpenses().then(res => {
      setExpenses(res);
      setSummary(expensesReducer({ type: 'calculateSummary', payload: res }));
    });
  }, [reload]);


  return (
    <div className="App">
      <expensesContext.Provider value={{
        expenses,
        summary,
        newModalVisible,
        formValues,
        setExpenses,
        handleFormChange,
        toggleReload,
        toggleNewModalVisibility,
      }}>
        <Header />
        <Routes>
          <Route path='/new' element={<NewRoute />} index={true}></Route>
          <Route path='/list' element={<ListRoute />}></Route>
          <Route path='/summary' element={<SummaryRoute />}></Route>
        </Routes>
      </expensesContext.Provider>
    </div>
  );
}

export default App;
