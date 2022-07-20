import { combineReducers } from 'redux'

import filtersReducer from "../components/Filters/FilterSlice";
import todoListReducer from "../components/TodoList/TodoSlice";

const rootReducer = combineReducers({
    filter: filtersReducer,
    todoList:todoListReducer,
})

export default rootReducer;