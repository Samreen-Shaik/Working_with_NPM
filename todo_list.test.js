const createTodoList = require("./todo_list");

describe("Todo List Tests", () => {
  let myTodoList;

  beforeEach(() => {
    myTodoList = createTodoList();
  });

  test("should add a new todo", () => {
    myTodoList.add("Buy groceries");
    const todos = myTodoList.toDisplayableList(myTodoList.getPending());
    expect(todos).toContain("[ ] Buy groceries");
  });

  test("should mark a todo as completed", () => {
    myTodoList.add("Complete homework");
    myTodoList.markComplete("Complete homework");
    const todos = myTodoList.toDisplayableList(myTodoList.getCompleted());
    expect(todos).toContain("[x] Complete homework");
  });

  test("should remove a todo", () => {
    myTodoList.add("Go to the gym");
    myTodoList.remove("Go to the gym");
    const todos = myTodoList.toDisplayableList(myTodoList.getPending());
    expect(todos).not.toContain("[ ] Go to the gym");
  });

  test("should retrieve pending todos", () => {
    myTodoList.add("Task 1");
    myTodoList.add("Task 2");
    myTodoList.markComplete("Task 1");
    const pending = myTodoList.getPending();
    expect(pending.length).toBe(1);
    expect(pending[0].task).toBe("Task 2");
  });

  test("should retrieve completed todos", () => {
    myTodoList.add("Task 1");
    myTodoList.markComplete("Task 1");
    const completed = myTodoList.getCompleted();
    expect(completed.length).toBe(1);
    expect(completed[0].task).toBe("Task 1");
  });
});
