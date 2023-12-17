let todoList = [];

function getData() {
  // Get the values from the input fields
  let todoValue = document.getElementById("todo").value;
  let dateValue = document.getElementById("date").value;

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
  let todoItem = {
    id : todoList.length,
    task: todoValue,
    date: dateValue,
    status: "todo"
  };

  // Add the to-do item to the array
  todoList.push(todoItem);

  // Optionally, you can display or log the array
  // console.log(todoItem);

  // You can perform additional actions here, such as displaying the to-do list on the page.
  // For example, you can create a list element and append it to a container.

  addItem(todoItem);
}

function addItem(todoItem) {
  let parentContainer = document.getElementById("todos-container");

  let todoContainer = document.createElement("div");
  todoContainer.draggable = true;
  todoContainer.classList.add("todo-item");
  todoContainer.setAttribute("data-container", todoItem.id)
  todoContainer.addEventListener("dragstart", onDragStart);

  let todoDataContainer = document.createElement("div");
  todoDataContainer.classList.add("todo-data");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");

  checkbox.addEventListener("change", function () {
    // Update the status to "completed" when the checkbox is checked
    if (checkbox.checked) {
      todoItem.status = "done";
      taskDescription.style.textDecoration = "line-through";
    } else {
      todoItem.status = "todo";
      taskDescription.style.textDecoration = "none";
    }

    // Optionally, you can display or log the updated array
    console.log(todoList);
  });

  let taskDescription = document.createElement("p");
  taskDescription.textContent = todoItem.task;

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.innerHTML = '<img src="./assets/trash.svg" alt="">';
  deleteButton.addEventListener("click", function () {
    // Find the index of the todoItem in the todoList
    let index = todoList.indexOf(todoItem);

    // Remove the todoItem from the todoList
    if (index !== -1) {
      todoList.splice(index, 1);
    }

    // Remove the corresponding HTML element from the DOM
    parentContainer.removeChild(todoContainer);

    // Optionally, you can display or log the updated array
    console.log(todoList);
  });

  let saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.classList.add("save-btn");
  saveButton.addEventListener("click", function () {
    // Update todoItem task and due date with the edited content
    todoItem.task = taskDescription.textContent;
    todoItem.date = dueDate.textContent;

    // Disable content editing after saving
    taskDescription.setAttribute("contenteditable", "false");
    dueDate.setAttribute("contenteditable", "false");

    // Remove the "Save" button and add back the "Edit" button
    todoDataContainer.appendChild(editButton);
    todoDataContainer.removeChild(saveButton);

    // Update the todo list
    console.log(todoList);
  });

  let editButton = document.createElement("button");
  editButton.classList.add("edit-btn");
  editButton.innerHTML = '<img src="./assets/edit.svg" alt="">';
  editButton.addEventListener("click", function () {
    // Enable content editing when the "Edit" button is clicked
    taskDescription.setAttribute("contenteditable", "true");
    dueDate.setAttribute("contenteditable", "true");

    // Add a "Save" button to save changes
    todoDataContainer.appendChild(saveButton);
    // Remove the "Edit" button
    todoDataContainer.removeChild(editButton);
  });

  let dueDateText = document.createElement("span");
  dueDateText.textContent = "Due Date: ";

  let dueDate = document.createElement("span");
  dueDate.textContent = todoItem.date;

  todoDataContainer.appendChild(checkbox);
  todoDataContainer.appendChild(taskDescription);
  todoDataContainer.appendChild(dueDate);
  todoDataContainer.appendChild(editButton);
  todoDataContainer.appendChild(deleteButton);

  let todoDateContainer = document.createElement("div");
  todoDateContainer.classList.add("todo-date");

  todoDateContainer.appendChild(dueDateText.cloneNode(true)); // Clone for consistency

  todoDateContainer.appendChild(dueDate);

  todoContainer.appendChild(todoDataContainer);
  todoContainer.appendChild(todoDateContainer);

  // Append the to-do item to the todos-container
  parentContainer.appendChild(todoContainer);

  // Optionally, you can display or log the array
  console.log(todoList);

  // Clear input fields after adding a to-do item
  document.getElementById("todo").value = "";
  document.getElementById("date").value = "";
}

