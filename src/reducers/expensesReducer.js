import { saveExpense } from "../services/expenses";

const getTotalExpenses = expenses => expenses.reduce((acc, act) => {
  acc += Number(act.amount) || 0;
  return acc;
}, 0);
const getLastExpenses = ({expenses, size}) => {
  const expensesByDate = expenses.sort((a, b) => b.date - a.date);

  if (expensesByDate.length < size) {
    const revertedExpenses = expenses.reverse();

    return [...expensesByDate, ...revertedExpenses].slice(0, size);
  }

  return [...expensesByDate].slice(0, size);
};

export const expensesReducer = ({ type, payload }) => {
  switch (type) {
    case 'addExpense':
      return saveExpense(payload);
    case 'calculateSummary':
      return getTotalExpenses(payload);
    case 'lastExpenses':
      return getLastExpenses(payload);
    default:
      break;
  }
}