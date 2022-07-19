const initState = [
  { id: 1, name: "Learn Redux", completed: false, priority: "Medium" },
  { id: 2, name: "Learn JavaScript", completed: true, priority: "Hight" },
  { id: 3, name: "Learn Python", completed: false, priority: "Low" },
];

const todoListReducer = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload]
    default:
      return state;
  }
};

export default todoListReducer;
