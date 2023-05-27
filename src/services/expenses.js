import axios from 'axios';

const EXPENSE_URL = 'http://localhost:5000';
const EXPENSES = 'expenses';
const NO_DATA = ['get', 'detele'];
const getExpenses = async () => await __fetchApiCall(`${EXPENSE_URL}/${EXPENSES}`, 'get');
const saveExpense = async (data) => await __fetchApiCall(`${EXPENSE_URL}/${EXPENSES}`, 'post', data);
const updateExpense = async (data) => await __fetchApiCall(`${EXPENSE_URL}/${EXPENSES}/${data.id}`, 'put', data);
const deleteExpense = async (id) => await __fetchApiCall(`${EXPENSE_URL}/${EXPENSES}/${id}`, 'delete');

const __fetchApiCall = async (url, method, data, config = {}) => {
  try {
      const callFn = axios[method];
      const res = NO_DATA.includes(method) ? await callFn(url, config) : await callFn(url, data, config);

      return res && res.data;
  } catch (error) {
    throw new Error(error);
  }
}


export {
  getExpenses,
  saveExpense,
  updateExpense,
  deleteExpense,
}