import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';
// import expenses from '../fixtures/expenses';

test('should render ExpensesSummary with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={20}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with two expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={5} expensesTotal={278978970}/>);
  expect(wrapper).toMatchSnapshot();
});

// test('return 0 if no expenses', () => {
//     const result = selectExpensesTotal([]);
//     expect(result).toEqual(0);    
// });

// test('return single expense amount', () => {
//     const result = selectExpensesTotal([expenses[0]]);
//     expect(result).toEqual(expenses[0].amount);    
// });

// test('return total from multiple expenses', () => {
//     const result = selectExpensesTotal(expenses);
//     expect(result).toEqual(expenses[0].amount + expenses[1].amount + expenses[2].amount);    
// });