const myTodoForm = document.getElementById("myTodoForm");
const userInput = document.getElementById("userInput");
const myList = document.getElementById("myList");

//checking for todos in `localStorage` from a previous session
//and rendering them to the DOM
function displayTodo() {
  myList.innerHTML = localStorage.getItem("todos");
}
displayTodo();

//preventing the default form submission behavior
myTodoForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

//call 'addTodo' function
function addTodo() {}

//defining addTodo function, capturing data
function addTodo() {
  if (userInput.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = userInput.value;
    myList.appendChild(li);

    let deleteButton = document.createElement("deleteButton");
    deleteButton.innerHTML = "Delete";
    li.appendChild(deleteButton);

    let editButton = document.createElement("editButton");
    editButton.innerHTML = "Edit";
    li.appendChild(editButton);

    userInput.value = "";
    saveTodos();
  }
}
//adding task completion indicator
myList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("complete");
    saveTodos();

    //adding 'delete' button functionality
  } else if (e.target.tagName === "DELETEBUTTON") {
    e.target.parentElement.remove();
    saveTodos();

    //adding 'edit' button functionality
  } else if (e.target.tagName === "EDITBUTTON") {
    const newText = prompt("Enter new text:");
    if (newText !== null && newText.trim() !== "") {
      const li = e.target.parentElement;
      const newTextElement = document.createTextNode(newText);
      li.replaceChild(newTextElement, li.firstChild);
      saveTodos();
    }
  }
});

//persisting the todos
function saveTodos() {
  localStorage.setItem("todos", myList.innerHTML);
}
