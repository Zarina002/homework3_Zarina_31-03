import React, { useState } from 'react'

const TodoItem = ({ task }) => {
  return <li>{task}</li>
}

const TodoList = ({ tasks }) => {
  return <ul>{tasks.map((task, index) => <TodoItem key={index} task={task} />)}</ul>
}

const TodoInput = ({ value, onChange, onAdd }) => {
  return (
      <div>
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Добавить задачу"
        />
        <button onClick={onAdd}>Добавить</button>
      </div>
  )
}

function App() {
  const [tasks, setTasks] = useState([])
  const [taskInput, setTaskInput] = useState('')

  const handleClick = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput])
      setTaskInput('')
    }
  }

  return (
      <div>
        <h1>Todo App</h1>
        <TodoInput value={taskInput} onChange={setTaskInput} onAdd={handleClick} />
        <TodoList tasks={tasks} />
      </div>
  );
}

export default App