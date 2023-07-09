**Step 1: Create index.html:**

Create a simple `index.html` structure. Inside the body tag, add a `form` element with an `input` field and a `submit` button. Also add an empty `ul` element where the tasks will be 
displayed.

**Step 2: Create CSS File `styles.css`:**

Create a new CSS file to handle the styling, named `styles.css`. Define some basic styling rules according to your preferences.

**Step 3: Begin main.js:**

Create a `main.js` file, which we'll use to write our JavaScript code.

1. **Capture form data:**

Define a form `submit` event listener. Inside, get the value of the input field. Prevent the default form submission behaviour using `event.preventDefault()`. Call a function named 
`addTodo()` that you will define in the next step.

2. **Define `addTodo()` function:**

The `addTodo()` function should create a new `li` element, an `edit` button, and a `delete` button each time it is called. Set the `innerText` of the `li` element to be the text captured 
from the form in the previous step. Append the `li` and both buttons to the `ul`.

3. **Adding `delete` button functionality:**

Attach a `click` event listener to the `delete` button within `addTodo()`. When clicked, it should remove the associated `li` from the `ul`.

**Step 4: Add 'edit' button functionality**

Attach a `click` event listener to the `edit` button within `addTodo()`. When clicked, it should change the `li`'s text to a text captured from a prompt.

**Step 5: Persisting the todos**

To make the todos persist even when the page is refreshed:

1. Inside `addTodo()`, save the updated todos array to `localStorage` right after a new todo is added.

2. At the top of `main.js`, check if there's any todos in `localStorage` from a previous session. If there is, render them to the DOM.

**Step 6: Reward user on completing**

Add a `click` event listener to each `li`. When an `li` is clicked, add a `complete` class to it, which you'll define in `styles.css`. This may be a line-through style.

**Step 7: Review:**

At this point your simple todo app is ready. Review your code and verify it's all functioning as expected.

**Step 8: Connect JavaScript to HTML**

In the HTML file, reference the JavaScript file with a `<script src="main.js"></script>` tag just before the closing `</body>` tag.

**Step 9: Test, debug and finalize**

Open the HTML file in a browser and test the functionality. Add, display, delete, and edit tasks. If any issue occurs, debug it until everything works fluidly. Also, check if the 
todos persist after refresh. The user should also be rewarded in some way for task completion. 
