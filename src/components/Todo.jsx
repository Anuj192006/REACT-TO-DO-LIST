import { useState, useRef } from 'react';
import './css/todo.css';
import Todoitems from './Todoitems';

let count = 0;

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    setTodos([...todos,{ no: count++, text: inputRef.current.value, display: "" },]);
    inputRef.current.value = ''; 
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].display = updatedTodos[index].display === "" ? "completed" : ""; 
    setTodos(updatedTodos);
  };

  return (
    <div className="todo">
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add a new task"
          className="todo-input"
        />
        <button onClick={add} className="todo-add-btn">
          Add
        </button>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => (
          <Todoitems
            key={index}
            no={item.no}
            display={item.display}
            text={item.text}
            deleteTodo={() => deleteTodo(index)}
            toggleComplete={() => toggleComplete(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
