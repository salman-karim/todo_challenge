

describe("ToDoListController", function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  var tasks = [
    { "task": "Buy groceries" },
    { "task": "Do laundry" }
  ];

  // describe('upon creation', function() {
  //
  //   it('initializes with an empty task list', function() {
  //     expect(ctrl.taskList).toBeUndefined();
  //     expect(ctrl.taskList).toBeUndefined();
  //   });
  // });

  describe('viewing list', function() {

    it('displays list of tasks', function() {
      expect(ctrl.taskList.tasks).toEqual(tasks);
    });
  });

  describe('adding tasks', function () {

    it('displays list of tasks', function() {
      ctrl.newTask = "Do the dishes";
      ctrl.addTask();
      expect(ctrl.taskList.tasks).toContain({'task': 'Do the dishes'});
    });
  });

});


//
// describe('to do list', function() {
//
//   beforeEach(module('ToDoList'));
//
//   var ctrl;
//
//   beforeEach(inject(function($controller) {
//     ctrl = $controller('ToDoListController');
//   }));
//
//   var tasks = [
//     { "task": "Buy groceries" },
//     { "task": "Do laundry" }
//   ];
//
//   context('viewing to do list', function () {
//
//     it('displays list of tasks', function() {
//       expect(ctrl.tasklist.tasks).toEqual(tasks);
//     });
//   });
//
//   context('adding tasks', function () {
//
//     it('displays list of tasks', function() {
//       expect(ctrl.addtask).toEqual(tasks);
//     });
//   });
//
//
//
// });
