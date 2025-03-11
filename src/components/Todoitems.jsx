import './css/todoitems.css';

const Todoitems = ({ no, display, text, deleteTodo, toggleComplete }) => {
  return (
    <div className={`todoitems ${display}`}>
      <div className="todoitems-container">
        <h1 onClick={toggleComplete}>{display === "completed" ? "✅" : "⬜️"}</h1>
        <div className="todoitems-tick">{text}</div>
      </div>
      <h1 onClick={deleteTodo}>❌</h1>
    </div>
  );
};

export default Todoitems;
