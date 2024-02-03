import { useState } from 'react';
import { Provider } from 'react-redux'
import './App.css';
import { TodoForm } from './component/TodoForm';
import { TodoList } from './component/TodoList';
import { store } from './redux/store';

function App() {
  const [todos, setTodos] = useState([])
  const createTodo = (text) => {
    setTodos(...todos, [...todos, { id: todos.length + 1, text, completed: false }])
  };

  const toggleTodo = (index) => {
    const list = [...todos];
    list[index].completed = !list[index].completed;
    setTodos(list);
  }

  return (
    <>
      <div className='main'>
        <h1 className='title'>&#128512;...To Do.!!!!&#128517;</h1>
        <Provider store={store}>


          <TodoForm onCreateTodo={createTodo} />
          <TodoList todos={todos} onToggle={toggleTodo} />
        </Provider>
      </div>
    </>
  );
}

export default App;
