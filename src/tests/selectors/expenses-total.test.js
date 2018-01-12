import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('return 0 if no expenses', () => {
    const result = selectExpensesTotal([]);
    expect(result).toEqual(0);    
});

test('return single expense amount', () => {
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toEqual(expenses[0].amount);    
});

test('return total from multiple expenses', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toEqual(expenses[0].amount + expenses[1].amount + expenses[2].amount);    
});