import { useState } from "react";
import TodoUI from "./components/TodoUI";
import {
  addTaskLogic,
  deleteTaskLogic,
  toggleTaskLogic,
  filterTasks
} from "./utils/todoLogic";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    const updated = addTaskLogic(task, todos, editId);
    setTodos(updated);
    setTask("");
    setEditId(null);
  };

  const handleDelete = (id) => {
    setTodos(deleteTaskLogic(todos, id));
  };

  const handleToggle = (id) => {
    setTodos(toggleTaskLogic(todos, id));
  };

  const handleEdit = (todo) => {
    setTask(todo.text);
    setEditId(todo.id);
  };

  const filteredTodos = filterTasks(todos, filter);

  return (
    <TodoUI
      task={task}
      setTask={setTask}
      handleAdd={handleAdd}
      editId={editId}
      setFilter={setFilter}
      filteredTodos={filteredTodos}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  );
}

export default App;