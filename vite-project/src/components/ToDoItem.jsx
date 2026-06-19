import React, { useState } from 'react';

const ToDoItem = ({ item, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editText.trim()) {
      editTodo(item.id, editText.trim());
      setIsEditing(false);
    }
  };

  return (
    <li className={`todo-item ${item.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <form className="edit-form" onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
          />
          <button type="submit" className="save-btn">Save</button>
          <button type="button" className="cancel-btn" onClick={() => { setIsEditing(false); setEditText(item.text); }}>Cancel</button>
        </form>
      ) : (
        <>
          <div className="todo-content" onClick={() => toggleComplete(item.id)}>
            <div className={`checkbox ${item.completed ? 'checked' : ''}`}></div>
            <span className="todo-text">{item.text}</span>
          </div>
          <div className="todo-actions">
            <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="delete-btn" onClick={() => deleteTodo(item.id)}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
};

export default ToDoItem;
