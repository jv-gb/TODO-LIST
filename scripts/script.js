window.onload = function () {
  displayTask()
}
const checkBox = document.querySelectorAll(".checkBox")
const deletar = document.querySelector(".delete")
const inputTask = document.querySelector(".inputTask")
const buttonAddTask = document.querySelector(".buttonAddTask")
const list = document.querySelector('.list')
const buttonClearTasks = document.querySelector('.buttonClearTasks')
let tasks

function getTasks() {
  if (localStorage.getItem("tasks") === null) {
    tasks = []
  }
  else {
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }
}
function addTasks() {
  if (inputTask.value !== "") {
    saveTaskOnLs()
    list.innerHTML = ""
    displayTask()

  } else {
    alert("Please enter a task!")
  }
}
function saveTaskOnLs() {
  getTasks()
  tasks.push(inputTask.value)
  localStorage.setItem("tasks", JSON.stringify(tasks))
  displayTask()
  inputTask.value = ""
}
function displayTask() {
  tasks = JSON.parse(localStorage.getItem("tasks"))
  tasks.forEach((task, index) => {

    const listItem = document.createElement("li")


    listItem.className = 'listItem'

    const listTask = document.createTextNode(task)


    listItem.appendChild(listTask)
    list.appendChild(listItem)

    listItem.innerHTML += `<input type = "button" class = "delete" value = "delete" id="${index}" onclick = "deleteTask(this.id)">`
  }
  )
}

function deleteTask(index) {
  const del = confirm("You are about to delete this task !")
  if (del === true) {
    getTasks()
  }
  tasks.splice(index, 1)
  localStorage.setItem("tasks", JSON.stringify(tasks))
  list.innerHTML = ""
  displayTask()
}

buttonAddTask.onclick = addTasks

function clearTasks() {
  const delTasks = confirm("Are you sure you want to delete all your tasks?")
  if (delTasks === true) {
    localStorage.clear()
    list.innerHTML = ""
    displayTask()
  }


}
buttonClearTasks.onclick = clearTasks


