// Function to add a new task
function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value.trim();
    if (task !== "") {
        var ul = document.getElementById("taskList");
        var li = document.createElement("li");
        li.innerHTML = task + ' <button onclick="deleteTask(this)">Delete</button>';
        ul.appendChild(li);
        input.value = "";
    }
}

// Function to delete a task
function deleteTask(element) {
    element.parentNode.remove();
}
