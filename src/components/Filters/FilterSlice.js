const initState = {
  search: "",
  status: "All",
  priorities: [],
};

const filtersReducer = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "filter/searchFilterChange":
      return {
        ...state,
        search: action.payload,
      };
      case 'filter/statusFilterChange':
        return {
          ...state,
          status: action.payload,
        }
        case 'filter/prioritiesFilterChange':
          return{
            ...state,
            priorities: action.payload,
          }
    default:
      return state;
  }
};

export default filtersReducer;
