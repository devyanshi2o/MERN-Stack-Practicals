// utils/todoLogic.js

export const addTaskLogic = (task, todos, editId) => {
  if (!task.trim()) return todos;

  if (editId) {
    return todos.map((t) =>
      t.id === editId ? { ...t, text: task } : t
    );
  }

  return [
    ...todos,
    { id: Date.now(), text: task, completed: false }
  ];
};

export const deleteTaskLogic = (todos, id) => {
  return todos.filter((t) => t.id !== id);
};

export const toggleTaskLogic = (todos, id) => {
  return todos.map((t) =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
};

export const filterTasks = (todos, filter) => {
  if (filter === "completed") return todos.filter(t => t.completed);
  if (filter === "pending") return todos.filter(t => !t.completed);
  return todos;
};