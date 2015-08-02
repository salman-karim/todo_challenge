describe('To Do List', function() {

  it('has a title', function() {
    browser.get('http://localhost:4567');

    expect(browser.getTitle()).toEqual("SK's to-do list");
  });

  it('has a title', function() {
    browser.get('http://localhost:4567');

    element(by.model('toDoCtrl.newTask')).sendKeys('Do the dishes');
    element(by.className('btn')).click();

    expect(element.all(by.repeater('entry in toDoCtrl.taskList')).get(2).getText()).toEqual('Do the dishes');
  });

});
