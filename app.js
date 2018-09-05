// Create references to page elements
var addButton = document.getElementById('add');
var taskInput = document.getElementById('task');
var taskList = document.getElementById('taskList');

// add new items to the list
addButton.addEventListener('click', function(){
    var task = taskInput.value;
    // don't ask an empty string
    if (task.trim()){
        // add new task list item
        var newItem = document.createElement('LI');
        var taskText = document.createTextNode(task);
        newItem.appendChild(taskText);
        // clear text input box
        taskInput.value = " ";
        taskList.appendChild(newItem);
    }
    else{
        alert('Task cannot be empty')
    }
});
