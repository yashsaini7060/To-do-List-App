let todoList = [];

function data() {
  // Get the values from the input fields
  var todoValue = document.getElementById("todo").value;
  var dateValue = document.getElementById("date").value;

  // Validate the input
  if (todoValue.trim() === "") {
    alert("Please enter a to-do task.");
    return;
  }

  if (dateValue === "") {
    alert("Please select a date.");
    return;
  }

  // Create an object to represent the to-do item
  var todoItem = {
    task: todoValue,
    date: dateValue,
    status: "none"
  };

  // Add the to-do item to the array
  todoList.push(todoItem);

  // Optionally, you can display or log the array
  console.log(todoItem);

  // You can perform additional actions here, such as displaying the to-do list on the page.
  // For example, you can create a list element and append it to a container.

  addItem(todoItem);
}

function addItem(todoItem) {
  alert("click")

  var todoContainer = document.createElement("div");
  todoContainer.classList.add("todo-item");

  var todoDataContainer = document.createElement("div");
  todoDataContainer.classList.add("todo-data");

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");

  var taskDescription = document.createElement("p");
  taskDescription.textContent = todoItem.task;

  var editButton = document.createElement("button");
  editButton.classList.add("edit-btn");
  editButton.innerHTML = '<img src="./assets/edit.svg" alt="">';
  editButton.addEventListener("click", function () {
    // Add your edit logic here
    alert("Edit button clicked for: " + todoItem.task);
  });

  var deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.innerHTML = '<img src="./assets/trash.svg" alt="">';
  deleteButton.addEventListener("click", function () {
    // Add your delete logic here
    alert("Delete button clicked for: " + todoItem.task);
  });

  todoDataContainer.appendChild(checkbox);
  todoDataContainer.appendChild(taskDescription);
  todoDataContainer.appendChild(editButton);
  todoDataContainer.appendChild(deleteButton);

  var todoDateContainer = document.createElement("div");
  todoDateContainer.classList.add("todo-date");
  var dueDate = document.createElement("p");
  dueDate.textContent = "Due Date: " + todoItem.date;
  todoDateContainer.appendChild(dueDate);

  todoContainer.appendChild(todoDataContainer);
  todoContainer.appendChild(todoDateContainer);

  // Append the to-do item to the todos-container
  document.getElementById("todos-container").appendChild(todoContainer);

  // Optionally, you can display or log the array
  console.log(todoList);

  // Clear input fields after adding a to-do item
  document.getElementById("todo").value = "";
  document.getElementById("date").value = "";
}