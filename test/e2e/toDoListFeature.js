describe('To Do List', function() {

  var newTaskBox = element(by.model('toDoCtrl.newTask'));
  var tasks = element.all(by.repeater('entry in toDoCtrl.taskList'));
  var enter = browser.actions().sendKeys(protractor.Key.ENTER);

  beforeEach(function() {
    browser.get('http://localhost:4567');
  });


  it('has a title', function() {
    expect(browser.getTitle()).toEqual("SK's to-do list");
  });

  it('has a title', function() {
    element(newTaskBox.sendKeys('Do the dishes'));
    element(by.className('btn')).click();

    expect(tasks.last().getText()).toEqual('Do the dishes');
  });

  // // it('can edit a task', function() {
  // //   element(by.binding('entry.task')).click();
  // //   element(by.className('test')).sendKeys('Revised task');
  // //   // element(by.binding('entry.task')).sendKeys('Revised task');
  // //   enter.perform();
  // //   // element(tasks.first()).click();
  //
  //
  //   // expect(tasks.first().getText()).toEqual('Revised task');
  // });
});
