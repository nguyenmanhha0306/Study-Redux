const initState = [
  { id: 1, name: "Learn Redux", completed: false, priority: "Medium" },
  { id: 2, name: "Learn JavaScript", completed: false, priority: "High" },
  { id: 3, name: "Learn Python", completed: true, priority: "Low" },
  { id: 4, name: "Learn ReactJS", completed: true, priority: "High" },
];

const todoListReducer = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload]

    case 'todoList/toggleTodoStatus':
      return state.map(todo => todo.id === action.payload ? {...state, completed: !todo.completed} : todo)
    default:
      return state;
  }
};

export default todoListReducer;
