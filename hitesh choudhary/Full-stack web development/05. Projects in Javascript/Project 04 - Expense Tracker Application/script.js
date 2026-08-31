document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Content Loaded Successfully");
  //  dom elements
  const expenseTitle = document.getElementById("expense-name");
  const expenseAmount = document.getElementById("expense-amount");
  const expenseForm = document.getElementById("expense-form");
  const expenseList = document.getElementById("expense-list");
  const totalExpense = document.getElementById("total-amount");
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  let totalAmount = calculateExpenses();

  // validation
  function checkItemExist(title) {
    return expenses.some((expense) => expense.title === title);
  }

  function validateInputs(title, amount) {
    if (
      title === undefined ||
      amount === undefined ||
      title === null ||
      amount === null
    ) {
      alert(`Title and Amount both required`);
      return false;
    }

    if (!title.trim() || typeof title !== "string") {
      alert(`Expense Title required`);
      return false;
    }

    if (typeof amount !== "number" || isNaN(amount) || amount <= 0) {
      alert(`Expense Amount required`);
      return false;
    }

    return true;
  }

  // features
  function saveExpenses(list) {
    if (!list || list === undefined) return;
    localStorage.setItem("expenses", JSON.stringify(list));
  }

  function calculateExpenses() {}

  // Event listener
  expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = expenseTitle.value.trim();
    const amount = parseFloat(expenseAmount.value.trim()).toFixed(2);
    const isExist = checkItemExist(title);
    if (isExist) {
      alert(`${title} is already exist in expense list`);
      return;
    }

    const isValidate = validateInputs(title, amount);

    expenses.push({ title, amount });
    saveExpenses(expenses);
  });
});
