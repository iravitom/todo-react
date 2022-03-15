import React from "react";
import { useState, useRef } from "react";
import "./todo.styles.css";

function Todo() {
  const inputTask = useRef(null);
  const [todoItems, setTodoItems] = useState([]);

  const addTotoItem = () => {
    inputTask.current.value &&
      setTodoItems([
        ...todoItems,
        { currentTask: inputTask.current.value, completed: false },
      ]);
    inputTask.current.value = "";
  };

  const deleteTask = (taskToBeDeleted) => {
    setTodoItems(
      todoItems.filter((task) => {
        return task.currentTask !== taskToBeDeleted;
      })
    );
  };

  const completeTask = (taskToBeComplete) => {
    setTodoItems(
      todoItems.map((task) => {
        return task.currentTask == taskToBeComplete
          ? {
              currentTask: taskToBeComplete,
              completed: true,
            }
          : task;
      })
    );
  };

  return (
    <div className="container w-25 mt-5">
      <h5>To do List</h5>
      <div className="mb-3">
        <input
          ref={inputTask}
          type="textbox"
          className="form-control"
          placeholder="Task"
        ></input>
      </div>
      <button type="button" className="btn btn-light" onClick={addTotoItem}>
        Add Task
      </button>
      <hr></hr>
      <ul className="list-Item p-0">
        {todoItems.map((item, key) => {
          return (
            <li
              className="d-flex bg-light p-3 justify-content-around align-items-start flex-column"
              key={key}
            >
              <div className="d-flex flex-column ">
                <div className="bold">{item.currentTask.toUpperCase()}</div>
                <div>
                  {item.completed ? (
                    <span className="text-success">Task Completed</span>
                  ) : (
                    <span className="text-danger">Task Not Completed</span>
                  )}
                </div>
              </div>
              <div className="d-flex  w-100">
                <div className="justify-content-end d-flex" style={{ flex: 1 }}>
                  <span
                    role="button"
                    className="me-2"
                    onClick={() => {
                      completeTask(item.currentTask);
                    }}
                  >
                    &#10004;
                  </span>
                  <span
                    className="bold text-info"
                    role="button"
                    onClick={() => {
                      deleteTask(item.currentTask);
                    }}
                  >
                    X
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
