import * as redux  from "redux"

// to give the access to the store we can also decide the to which component has to use the data of the store that is with the hellp of the provider
import { todoReducer } from "./reducers/todoReducers"
export const store=redux.createStore(todoReducer)
// console.log(store)