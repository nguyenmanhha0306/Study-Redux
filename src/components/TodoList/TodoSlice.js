const initState = [
  { id: 1, name: "Learn Redux", completed: false, priority: "Medium" },
  { id: 2, name: "Learn JavaScript", completed: false, priority: "High" },
  { id: 3, name: "Learn Python", completed: true, priority: "Low" },
  { id: 4, name: "Learn Redux", completed: true, priority: "High" },
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
