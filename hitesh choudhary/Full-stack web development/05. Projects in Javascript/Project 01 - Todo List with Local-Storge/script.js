document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Content Loaded Successfully!!!");

  const input = document.getElementById("todo-input");
  const addTodoBtn = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach((todo) => renderTodo(todo));

  addTodoBtn.addEventListener("click", function (event) {
    const inputText = input.value.trim();
    if (!inputText) {
      alert("Enter a valid Todo");
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isCompleted: false,
    };

    todos.unshift(newTodo);
    saveTodo();
    renderTodo(newTodo); 
    input.value = "";
  });

  function saveTodo() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }; 

  function renderTodo(todo) {
    const todoItem = document.createElement("li");
    todoItem.setAttribute("data-id", todo.id);

    if (todo.isCompleted) {
      todoItem.classList.add("completed");
    }

    todoItem.innerHTML = ` 
      <span>${todo.text}</span> 
      <button>delete</button>
    `;

    todoItem.addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
        return;
      }
      todo.isCompleted = !todo.isCompleted;
      todoItem.classList.toggle("completed");
      saveTodo();
    });

    todoItem.querySelector('button').addEventListener("click", function(event){
      event.stopPropagation();  
      todos = todos.filter((t) => t.id !== todo.id);
       todoItem.remove();
      saveTodo(); 
    });

    todoList.prepend(todoItem);

  }  
});
