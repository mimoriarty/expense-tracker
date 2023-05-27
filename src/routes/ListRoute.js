import { useContext } from 'react';

import { expensesContext } from '../App';
import List from '../Components/List';

export default function ListRoute() {
  const { expenses } = useContext(expensesContext);
  return (
    <List title='Expenses list' list={expenses}/>
  );
}