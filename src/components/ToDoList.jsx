import { useNavigate } from 'react-router-dom';
import Style from './Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { useState, useEffect } from 'react';
import {
  getAllTodoList,
  addTodoItem,
  deleteTodoItem,
  updateTodoItem,
} from '../data/dummyApi';

function TodoListPage() {
  const navigate = useNavigate();

  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    getCurrentTodoList();
  }, []);

  function getCurrentTodoList() {
    const currentTodoList = getAllTodoList();
    setTodoList(currentTodoList);
  }

  function moveToHomeButton() {
    navigate('/');
  }

  function onclickAddButton() {
    addTodoItem(newTodo);
    getCurrentTodoList();
    setNewTodo('');
  }

  function activeEnter(e) {
    if (e.key === 'Enter') {
      onclickAddButton();
    }
  }

  function onclickDeleteButton(index) {
    deleteTodoItem(index);
    getCurrentTodoList();
  }

  function onChangeCheckboxButton(event, index) {
    const todoItem = todoList[index];
    todoItem.isDone = event.target.checked;
    updateTodoItem(index, todoItem);
    getCurrentTodoList();
  }

  return (
    <Style.TodoListPage>
      <div className="todo">
        <FontAwesomeIcon
          className="homeButton"
          icon={faHouse}
          onClick={moveToHomeButton}
        />
        <h1>↔ ToDo List</h1>
        <p className="totalCount">Total : {todoList.length}</p>
        <div className="input">
          <input
            className="inputBox"
            type="text"
            placeholder="뭐할거니"
            value={newTodo}
            onChange={(event) => setNewTodo(event.target.value)}
            onKeyDown={activeEnter}
          ></input>
          <button className="todoInputButton" onClick={onclickAddButton}>
            +
          </button>
        </div>
        <div className="todo-list">
          {todoList.map((todoItem, index) => (
            <div className="todo-item" key={index}>
              <input
                className="checkbox"
                type="checkbox"
                onChange={(event) => onChangeCheckboxButton(event, index)}
                checked={todoItem.isDone}
              />
              <span className={todoItem.isDone ? 'line-through' : ''}>
                {todoItem.name}
              </span>
              <button
                className="trashcan"
                onClick={() => onclickDeleteButton(index)}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </Style.TodoListPage>
  );
}
export default TodoListPage;
