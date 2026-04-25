// components/TodoUI.js

import "../App.css";

function TodoUI({
  task,
  setTask,
  handleAdd,
  editId,
  setFilter,
  filteredTodos,
  handleToggle,
  handleDelete,
  handleEdit
}) {
  return (
    <div className="container">
      <h2>Todo App Using ReactJS</h2>

      <div className="input-section">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={handleAdd}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <span
              className={todo.completed ? "completed" : ""}
              onClick={() => handleToggle(todo.id)}
            >
              {todo.text}
            </span>

            <div>
              <button onClick={() => handleEdit(todo)}>Edit</button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoUI;