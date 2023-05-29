import { saveExpense, deleteExpense, updateExpense} from "../services/expenses";

const getCurrentMonthExpense = expenses => {
  const currentMonth = new Date().getMonth();
  return expenses.reduce((acc, act) => {
    if (act.date === null || act.date === '') return acc;

    const expenseMonth = new Date(act.date).getMonth();

    if (expenseMonth === currentMonth) {
      acc += Number(act.amount) || 0;
      
      return acc;
    }

    return acc;
  }, 0);

}
const getTotalExpenses = expenses => expenses.reduce((acc, act) => {
  acc += Number(act.amount) || 0;
  return acc;
}, 0);
const getLastExpenses = ({expenses, size}) => {
  const expensesByDate = expenses.sort((a, b) => b.date - a.date);
  
  if (expensesByDate.length < size) {
    const ids = expensesByDate.map(({ id }) => id);
    const expensesToAdd = expenses.filter(({ id }) => !ids.includes(id)).reverse();

    return [...expensesByDate, ...expensesToAdd].slice(0, size);
  }

  return [...expensesByDate].slice(0, size);
};

export const expensesReducer = ({ type, payload }) => {
  switch (type) {
    case 'addExpense':
      return saveExpense(payload);
    case 'updateExpense':
      return updateExpense(payload);
    case 'calculateOverallSummary':
      return getTotalExpenses(payload);
    case 'calculateMonthSummary':
      return getCurrentMonthExpense(payload);
    case 'lastExpenses':
      return getLastExpenses(payload);
    case 'deleteExpense':
      return deleteExpense(payload);
    default:
      break;
  }
}