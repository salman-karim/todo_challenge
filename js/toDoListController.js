toDoList.controller('ToDoListController', [function() {

  this.taskList = [
      { "task": "Buy groceries" },
      { "task": "Do laundry" }
    ];
  // };

  this.addTask = function() {
    this.taskList.push({
      "task": this.newTask
    });
    console.log(this.taskList);
  };

}]);


// }]);
