import React, { useState } from 'react';


const Card = ({ taskObj, index, deleteTask, updateListArray, handleEdit }) => {
    return (
      <div className="card p-3 my-2 shadow-sm">
        <h5>{taskObj.Name}</h5>
        <p>{taskObj.Description}</p>
        <p>
          <strong>Due Date:</strong> {taskObj.DueDate}
        </p>
        <p>
          <strong>Status:</strong>{' '}
          <span className={taskObj.Status === 'Completed' ? 'text-success' : 'text-danger'}>
            {taskObj.Status}
          </span>
        </p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-danger" onClick={() => deleteTask(index)}>
            Delete
          </button>
          <button className="btn btn-info" onClick={() => handleEdit(taskObj)}>
            Edit
          </button>
        </div>
      </div>
    );
  };
  
  export default Card;

