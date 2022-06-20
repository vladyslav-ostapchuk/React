import React, { useEffect } from 'react';
import TodoList from "./Todo/TodoList";
import Context from "./context";
// import AddTodo from "./Todo/AddTodo";
import Loader from './Loader';
import Modal from './Modal/Modal';

const AddTodo = React.lazy(
  () => new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./Todo/AddTodo'))
    }, 3000)
  }))


function App() {
  const [todos, setTodos] = React.useState([
    // { id: 1, completed: false, title: 'купить хлеб' },
    // { id: 2, completed: false, title: 'купить масло' },
    // { id: 3, completed: false, title: 'купить молоко' }
  ])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5 ')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        }, 2000)
      })
  }, [])


  function toggleTodo(id) {
    setTodos(
      todos.map(el => {
        if (el.id === id) {
          el.completed = !el.completed
        }
        return el
      }))
  }

  function removeTodo(id) {
    setTodos(todos.filter(el => el.id !== id))
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React Todos</h1>
        <Modal />


        <React.Suspense fallback={<Loader />}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>

        {loading && <Loader />}
        {todos.length
          ?
          <TodoList todos={todos} onToggle={toggleTodo} />
          : loading ? null : (
            <p>No todos!!!</p>
          )}
      </div>
    </Context.Provider >
  );
}

export default App;
