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
  function checkItemExist(item) {
    return expenses.some((expense) => expense.id === item.id);
  }

  function validateInputs(title, amount) {
    if (
      title === undefined ||
      amount === undefined ||
      title === null ||
      amount === null
    ) {
      return { isValid: false, message: `Title and Amount both required` };
    }

    if (!title.trim() || typeof title !== "string") {
      return { isValid: false, message: `Expense Title required` };
    }

    if (typeof amount !== "number" || isNaN(amount) || amount <= 0) {
      return { isValid: false, message: `Expense Amount required` };
    }

    return { isValid: true, message: `Validate successfully` };
  }

  // features
  function saveExpenses(list) {
    if (!list || list === undefined) return;
    localStorage.setItem("expenses", JSON.stringify(list));
  }

  function calculateExpenses(total) {
    // if (!total || typeof total !== "number") return;
    // let calculateAmount = 0;
    // calculateAmount += total;
    // return calculateAmount;
    // Instead of this we have to use reducer method
  }

  // Event listener
  expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = expenseTitle.value.trim();
    const amount = parseFloat(expenseAmount.value.trim());
    const { isValid, message } = validateInputs(title, amount);

    if (!isValid) {
      alert(message);
      return;
    }

    const newExpense = { id: Date.now(), title, amount: amount.toFixed(2) };

    const isExist = checkItemExist(newExpense);
    if (isExist) {
      alert(`${title} is already exist in expense list`);
      return;
    }

    expenses.push(newExpense);
    saveExpenses(expenses);
    
  });
});
