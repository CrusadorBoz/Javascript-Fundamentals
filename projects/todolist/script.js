// Array to store the tasks
const tasks = [];

// Function to add a new task
function addTask(task) {
  tasks.push(task);
  console.log("Task added: " + task);
}

// Function to remove a task
function removeTask(task) {
  const index = tasks.indexOf(task);
  if (index > -1) {
    tasks.splice(index, 1);
    console.log("Task removed: " + task);
  } else {
    console.log("Task not found: " + task);
  }
}

// Function to list all tasks
function listTasks() {
  console.log("Tasks:");
  tasks.forEach((task, index) => {
    console.log(index + 1 + ". " + task);
  });
}

// Testing the functions
addTask("Buy groceries");
addTask("Clean the house");
addTask("Do laundry");
listTasks();
removeTask("Clean the house");
listTasks();
