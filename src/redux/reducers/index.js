import { combineReducers } from "redux"
import todos from './todo'

const rootReducers = (initialState) => combineReducers({
     todos
})

export default rootReducers;