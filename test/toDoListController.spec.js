describe("ToDoListController", function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initializes with an empty task list', function() {
    expect(ctrl.taskList).toBeUndefined();
    expect(ctrl.taskList).toBeUndefined();
  });

});
