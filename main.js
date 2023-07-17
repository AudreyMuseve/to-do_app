const myTodoForm = document.getElementById("myTodoForm");
const userInput = document.getElementById("userInput");
const myList = document.getElementById("myList");
const addButton = document.getElementById("add-btn");
addButton.addEventListener("click", addTodo);

myTodoForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

function addTodo() {
  if (userInput.value === "") {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    modalContent.textContent = "You must write something!";

    const okButton = document.createElement("button");
    okButton.textContent = "OK";

    modalContent.appendChild(okButton);
    modal.appendChild(modalContent);

    document.body.appendChild(modal);

    function closeModal() {
      modal.remove();
    }

    modal.addEventListener("click", function (event) {
      if (event.target === modal || event.target === okButton) {
        closeModal();
      }
    });
  } else {
    let li = document.createElement("li");
    li.textContent = userInput.value;
    myList.appendChild(li);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn-delete");

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("btn-edit");

    li.appendChild(editButton);
    li.appendChild(deleteButton);

    userInput.value = "";
    saveTodos();
  }
}

myList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("complete");
    saveTodos();
  } else if (e.target.classList.contains("btn-delete")) {
    e.target.parentElement.remove();
    saveTodos();
  } else if (e.target.classList.contains("btn-edit")) {
    const newText = prompt("Enter new text:");
    if (newText !== null && newText.trim() !== "") {
      const li = e.target.parentElement;
      const newTextElement = document.createTextNode(newText);
      li.replaceChild(newTextElement, li.firstChild);
      saveTodos();
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  loadTodos();
});

function loadTodos() {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    const todos = JSON.parse(savedTodos);
    todos.forEach((todo) => {
      const li = document.createElement("li");
      li.textContent = todo.text;

      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("btn-delete");

      let editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.classList.add("btn-edit");

      li.appendChild(editButton);
      li.appendChild(deleteButton);

      if (todo.completed) {
        li.classList.add("complete");
      }

      myList.appendChild(li);
    });
  }
}

function saveTodos() {
  const todos = Array.from(myList.children).map((li) => ({
    text: li.textContent,
    completed: li.classList.contains("complete"),
  }));

  localStorage.setItem("todos", JSON.stringify(todos));
}
