export default (expenses) => {
  const amounts = expenses.map(p => p.amount);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return amounts.reduce(reducer, 0);
};