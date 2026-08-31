document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Content Loaded Successfully");
  //  dom elements
  const expenseTitle = document.getElementById("expense-name");
  const expenseAmount = document.getElementById("expense-amount");
  const expenseForm = document.getElementById("expense-form");
  const expenseList = document.getElementById("expense-list");
  const totalExpense = document.getElementById("total-amount");
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

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

  function calculateExpenses(expenses) {
    return expenses.reduce(
      (accumulator, expense) => accumulator + Number(expense.amount),
      0,
    );
  }

  function deleteExpenseItem(event) {
    if (event.target.tagName !== "BUTTON") return; 
    
      const expenseId = Number(event.target.getAttribute("data-id"));
      expenses = expenses.filter((expense) => expense.id !== expenseId);
      saveExpenses(expenses);
      renderExpensesList();
  }

  function renderTotalExpense() {
    const totalAmount = calculateExpenses(expenses);
    totalExpense.textContent = String(totalAmount.toFixed(2));
  }

  function renderExpensesList() {
    expenseList.innerHTML = "";
    expenses.forEach((expense) => {
      const expenseItem = document.createElement("li");
      expenseItem.innerHTML = `${expense.title} - $${expense.amount}  <button data-id=${expense.id}>Delete Item</button>`;
      expenseList.appendChild(expenseItem);

      const deleteButton = expenseItem.querySelector("button");
      deleteButton.addEventListener("click", deleteExpenseItem);
    });

    renderTotalExpense();
  }

  renderExpensesList();

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

    const isExist = checkItemExist(title);
    if (isExist) {
      alert(`${title} is already exist in expense list`);
      return;
    }

    const newExpense = { id: Date.now(), title, amount: amount.toFixed(2) };

    expenses.push(newExpense);
    saveExpenses(expenses);
    renderExpensesList();
    expenseTitle.value = "";
    expenseAmount.value = "";
  });
});
