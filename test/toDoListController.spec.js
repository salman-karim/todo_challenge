

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

describe('when viewing to do list', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  var tasks = [
    { "task": "Buy groceries" },
    { "task": "Do laundry" }
  ];

  it('displays list of tasks', function() {
    expect(ctrl.tasklist.tasks).toEqual(tasks);
  });
});
