const addButton = document.querySelector("#addButton");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

addButton.addEventListener("click", addTask);

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

if (tasks.length > 0) {
  tasks.forEach((task, key) => {
    taskList.innerHTML += `<li onclick="removeTask(${key + 1})">${task}</li>`;
  });
}

function addTask() {
  if (taskInput.value === "") return;
  const task = taskInput.value;
  const key = tasks.length + 1;
  taskList.innerHTML += `<li onclick="removeTask(${key})">${task}</li>`;
  tasks.push(task);
  taskInput.value = "";
  updateLocalStorage();
}

function removeTask(key) {
  tasks.splice(key - 1, 1);
  taskList.innerHTML = "";
  tasks.forEach((task, key) => {
    taskList.innerHTML += `<li onclick="removeTask(${key + 1})">${task}</li>`;
  });
  updateLocalStorage();
}

function updateLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
