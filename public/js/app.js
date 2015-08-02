var toDoList = angular.module('ToDoList', ["xeditable"]);

toDoList.run(function(editableOptions) {
  editableOptions.theme = 'default'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
