toDoList.controller('ToDoListController', [function() {

  this.taskList = {
    "tasks": [
        { "task": "Buy groceries" },
        { "task": "Do laundry" }
    ]
  };

  this.addTask = function() {
    this.taskList.tasks.push({
      "task": this.newTask
    });
    console.log(this.taskList);
  };

}]);
