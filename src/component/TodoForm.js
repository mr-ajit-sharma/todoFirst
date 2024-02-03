import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/actions/todoActions"

export const TodoForm = () => {
    const [todoText, setTodoText] = useState('')
    const dispatch=useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        setTodoText("")
        dispatch(addTodo(todoText))
    }

    return (
        <form onSubmit={handleSubmit} className="mainForm">
            <input className="input" type="text" placeholder="Write something todo...." value={todoText} onChange={(e)=>setTodoText(e.target.value)} />
            <button type="submit" className="button">Add</button>
        </form>
    )
}