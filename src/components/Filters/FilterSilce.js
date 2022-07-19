const initState = {
  search: "",
  status: "All",
  priority: [],
};

const filtersReducer = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "filter/searchFilterChange":
      return {
        ...state.filter,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
