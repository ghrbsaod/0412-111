let todoList = [
    {
      name: "스트레칭",
      isDone: false,
    },
    {
      name: "운동하기",
      isDone: false,
    },
    {
      name: "할일체크",
      isDone: true,
    },
    {
      name: "프로젝트",
      isDone: false,
    },
    {
      name: "저녁약속",
      isDone: false,
    },
    {
      name: "공부하기",
      isDone: true,
    },
    
  ];
  
  function getAllTodoList() {
    return todoList;
  }
  
  function addTodoItem(text) {
    const newTodoList = [...todoList];
    newTodoList.push({ name: text, isDone: false });
    todoList = newTodoList;
  }
  
  function deleteTodoItem(index) {
    const nextTodoList = [...todoList];
    nextTodoList.splice(index, 1);
    todoList = nextTodoList;
  }
  
  function updateTodoItem(index, todoItem) {
    const nextTodoList = [...todoList];
    nextTodoList[index] = todoItem;
    todoList = nextTodoList;
  }
  
  export { getAllTodoList, addTodoItem, deleteTodoItem, updateTodoItem };
  