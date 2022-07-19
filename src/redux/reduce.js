import { combineReducers } from 'redux'

import filtersReducer from "../components/Filters/FilterSilce";
import todoListReducer from "../components/TodoList/TodoSlice";

// const rootReducer = (state= {}, action) => {
//     return{
//          filter: filtersReducer(state.filter, action),
//          todoList:todoListReducer(state.todoList, action),
//     }

// }

const rootReducer = combineReducers({
    filter: filtersReducer,
    todoList:todoListReducer,
})

export default rootReducer;