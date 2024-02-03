import { ADD_TODO } from '../actions/todoActions'
import { TOGGLE_TODO } from '../actions/todoActions'
const initialState = {
    todos: [
        {text:'wake up at 9',completed:true},
        {text:'learning at 2',completed:false}
     ]
}
export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {
                    text: action.text,
                    completed: false
                }]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, i) => {
                    if (i === action.index) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }

        default: return state
    }

}