import { saveExpense } from "../services/expenses";

const getTotalExpenses = expenses => expenses.reduce((acc, act) => {
  acc += Number(act.amount) || 0;
  return acc;
}, 0);

export const expensesReducer = ({ type, payload }) => {
  switch (type) {
    case 'addExpense':
      return saveExpense(payload);
    case 'calculateSummary':
      return getTotalExpenses(payload);
    default:
      break;
  }
}