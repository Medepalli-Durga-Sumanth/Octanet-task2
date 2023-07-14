let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");

function addTask() {
	if (taskInput.value === "") {
		alert("Please enter a task!");
	} else {
		let task = document.createElement("li");
		task.innerText = taskInput.value;
		taskList.appendChild(task);
		taskInput.value = "";

		let deleteButton = document.createElement("button");
		deleteButton.innerText = "Delete";
		deleteButton.classList.add("deleteButton");
		deleteButton.addEventListener("click", function() {
			task.remove();
		});
		task.appendChild(deleteButton);

		let editButton = document.createElement("button");
		editButton.innerText = "Edit";
		editButton.classList.add("editButton");
		editButton.addEventListener("click", function() {
			let newTask = prompt("Edit task:", task.innerText);
			if (newTask !== null) {
				task.innerText = newTask;
			}
		});
		task.appendChild(editButton);
	}
}

taskInput.addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		addTask();
	}
});