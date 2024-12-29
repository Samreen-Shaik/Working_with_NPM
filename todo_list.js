const createTodoList = () => {
  let todos = [];

  return {
    add: (task) => {
      todos.push({ task, completed: false });
    },
    remove: (task) => {
      todos = todos.filter((todo) => todo.task !== task);
    },
    markComplete: (task) => {
      const todo = todos.find((todo) => todo.task === task);
      if (todo) {
        todo.completed = true;
      }
    },
    getPending: () => {
      return todos.filter((todo) => !todo.completed);
    },
    getCompleted: () => {
      return todos.filter((todo) => todo.completed);
    },
    toDisplayableList: (list) => {
      return list
        .map((todo) => {
          const status = todo.completed ? "[x]" : "[ ]";
          return `${status} ${todo.task}`;
        })
        .join("\n");
    },
  };
};

module.exports = createTodoList;
