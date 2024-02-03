import {useDispatch, useSelector} from 'react-redux'
import { toggleTodo } from '../redux/actions/todoActions'

export const TodoList = () => {
    // here we have get the state without importing by using useselector 
    const todos = useSelector((state) => state.todos)
    const dispatch=useDispatch()    
    
    return (
        <div>
            <ul className='mainList'>
                {todos.map((todo, index) => (
                    <li key={todo.id} className='list'>
                        <span className='listText'>{todo.text}</span>
                        <span className={todo.completed ? 'completed' : 'pending'}>{todo.completed ? 'completed' : 'pending'}</span>
                        <button className='listButton' onClick={() => {dispatch(toggleTodo(index))}}>Toggle</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}