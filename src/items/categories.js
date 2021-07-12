const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a'];

export const incomeCategories = [
  { type: 'Business', amount: 0, color: incomeColors[0] },          
  { type: 'Investmens', amount: 0, color: incomeColors[1] },
  { type: 'Sold item', amount: 0, color: incomeColors[2] },
  { type: 'Funds', amount: 0, color: incomeColors[3] },
  { type: 'Lottery', amount: 0, color: incomeColors[4] },
  { type: 'Gift', amount: 0, color: incomeColors[5] },
  { type: 'Salary', amount: 0, color: incomeColors[6] },
  { type: 'Savings', amount: 0, color: incomeColors[7] },
  { type: 'Income from Rent', amount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
  { type: 'Bills', amount: 0, color: expenseColors[0] },
  { type: 'Gas', amount: 0, color: expenseColors[1] },
  { type: 'Shopping', amount: 0, color: expenseColors[2] },
  { type: 'Traveling', amount: 0, color: expenseColors[3] },
  { type: 'Groceries', amount: 0, color: expenseColors[4] },
  { type: 'Gold', amount: 0, color: expenseColors[5] },
  { type: 'Rent', amount: 0, color: expenseColors[6] },
  { type: 'Entertainment', amount: 0, color: expenseColors[7] },
  { type: 'Studies', amount: 0, color: expenseColors[8] },
];

export const resetCategories = () => {
    incomeCategories.forEach((c) => c.amount = 0);
    expenseCategories.forEach((c) => c.amount = 0);
  };
  