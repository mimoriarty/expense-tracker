import { createContext, useEffect, useState } from 'react';
import Header from './Layout/Header';
import New from './Components/New';
import List from './Components/List';
import Summary from './Components/Summary';
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

  useEffect(() => {
    getExpenses().then(res => {
      setExpenses(res);
      setSummary(expensesReducer({ type: 'calculateSummary', payload: res }));
    });
  }, [reload]);

  return (
    <div className="App">
      {/* <Header /> */}
      <expensesContext.Provider value={{
        expenses,
        setExpenses,
        formValues,
        handleFormChange,
        toggleReload,
      }}>
        <New />
        <List />
        <Summary amount={summary} />
      </expensesContext.Provider>
    </div>
  );
}

export default App;
