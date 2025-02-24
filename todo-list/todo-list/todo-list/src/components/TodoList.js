import React, { useState } from 'react';
import CreateTask from '../modals/createTask'
import { Modal } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [editTask, setEditTask] = useState(null);
 
  

  const toggle = () => {
    setModal(!modal);
    if (!modal) setEditTask(null); // Reset editTask when modal closes
  };
  
  const handleEdit = (task) => {
    setEditTask(task);
    setModal(true);
  };

  const saveTask = (taskObj) => {
    if (editTask) {
      const updatedTasks = taskList.map((t) =>
        t === editTask ? taskObj : t
      );
      setTaskList(updatedTasks);
      setEditTask(null);
    } else {
      setTaskList([...taskList, taskObj]);
    }
    setModal(false);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...taskList];
    updatedTasks.splice(index, 1);
    setTaskList(updatedTasks);
  };

  // Update a task at a given index.
  const updateListArray = (updatedTask, index) => {
    const updatedTasks = [...taskList];
    updatedTasks[index] = updatedTask;
    setTaskList(updatedTasks);
  };

  return (
    <>
      <div className="header text-center p-3 bg-light">
        <h3>Todo List Application</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      
      <div className="task-container p-4">
        {taskList.length === 0 ? (
          <p className="text-center">No tasks available. Please add a task.</p>
        ) : (
          taskList.map((task, index) => (
            <Card
              key={index}
              taskObj={task}
              index={index}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
              handleEdit={handleEdit}
            />
          ))
        )}
      </div>
      
      <CreateTask 
        modal={modal} 
        toggle={toggle} 
        save={saveTask} 
        editTask={editTask} 
      />
    </>
  );
};

export default TodoList;

//   return (
//     <div>
//       <h3>To-Do List Application</h3>
//       <button onClick={() => setModal(true)}>Add Task</button>
//       {taskList.length === 0 ? (
//         <p>No tasks added yet.</p>
//       ) : (
//         taskList.map((task, index) => (
//           <div key={index} className="task-card">
//             <h5>{task.Name}</h5>
//             <p>{task.Description}</p>
//             <p>Due Date: {task.DueDate}</p>
//             <p>Status: {task.Status}</p>
//             <button onClick={() => handleEdit(task)}>Edit</button>
//           </div>
//         ))
//       )}
//       <CreateTask
//         modal={modal}
//         toggle={toggle}
//         save={saveTask}
//         editTask={editTask}
//       />
//     </div>
//   );
// };


  // const saveTask = (taskObj) => {
  //   if (editIndex !== null) {
  //     const updatedList = [...taskList];
  //     updatedList[editIndex] = taskObj;
  //     setTaskList(updatedList);
  //     setEditIndex(null); // Reset after editing
  //     setEditTask(null);
  //   } else {
  //     const updatedList = [...taskList, taskObj];
  //     setTaskList(updatedList);
  //   }
  //   setModal(false); // Close modal after save
  // };
  

  // const saveTask = (taskObj) => {
  //   const updatedList = [...taskList, taskObj];
  //   setTaskList(updatedList);
    // let tempList = taskList;
    // tempList.push(taskObj);
    // setTaskList(tempList);
    // setModal(false);
    //localStorage.set
  // };
  // const deleteTask = (index) => {
  //   const updatedList = [...taskList];
  //   updatedList.splice(index, 1);
  //   setTaskList(updatedList);
  // };
   
  // const updateListArray = (obj, index) => {
  //   const updatedList = [...taskList];
  //   updatedList[index] = obj;
  //   setTaskList(updatedList);
  // };

  
//   return (
//     <>
//       {/*</><button onClick={() => setModal(true)}>Add Task</button>*/}
      
//       <div className="header text-center p-3 bg-light">
//         <h3>Todo List Application</h3>
//         <button onClick={() => setModal(true)}>Add Task</button>
//         <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
//           Create Task
//         </button>
//       </div>
      
//       <div className="task-container p-4">
//         {taskList.length === 0 ? (
//           <p className="text-center">No tasks available. Please add a task.</p>
//         ) : (
//           taskList.map((obj, index) => (
//             <Card
//               key={index}
//               taskObj={obj}
//               index={index}
//               deleteTask={deleteTask}
//               updateListArray={updateListArray}
//             />
//           ))
//         )}
//       </div>

//       <CreateTask toggle={toggle} modal={modal} save={saveTask} />
//     </>
//   );
// };

// export default TodoList;

       {/* <div className="task-container p-4">
        {taskList && taskList.map((obj, index) => <Card taskObj = {obj} index = {index}/>)}
          {/*{taskList.map((obj) => <li>{obj.Name}</li>)}*/}
       

        {/*<CreateTask toggle={toggle} modal = {modal} save={saveTask} /> 

    {/* //    {taskList.map((task, index) => (
    //       <div key={index} className="card p-2 mt-2">
    //         <div className="card-body">
    //         <h5>{task.Name}</h5>
    //           <p>{task.Description}</p>
    //           <p>Due Date: {task.Date}</p>
    //           <p>Status: {task.Status}</p>
    //         </div>
    //       </div>
    //     ))}
        <CreateTask toggle={toggle} modal={modal} />
    //   </div> */}
//      */}

//   );
// };
// export default TodoList; 


//  {taskList.length === 0 ? (
//           <p className="text-center">No tasks available. Please add a task.</p>
//         ) : (
//           taskList.map((task, index) => (
//             <div key={index} className="card p-3 my-2 shadow-sm">
//               <h5>{task.Name}</h5>
//               <p>{task.Description}</p>
//               <p>
//                 <strong>Due Date:</strong> {task.DueDate}
//               </p>
//               <p>
//                 <strong>Status:</strong>{' '}
//                 <span
//                   className={
//                     task.Status === 'Completed' ? 'text-success' : 'text-danger'
//                   }
//                 >
//                   {task.Status}
//                 </span>
//               </p>
//             </div>
//           ))
//         )} 
    
//     </>
//   );
// };

// export default TodoList; */
 



// import React, { useState } from 'react';
// import CreateTask from '../modals/createTask';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from './Card';

// const TodoList = () => {
//   const [modal, setModal] = useState(false);
//   const [taskList, setTaskList] = useState([]);

//   const toggle = () => setModal(!modal);

//   const saveTask = (taskObj) => {
//     const updatedList = [...taskList, taskObj];
//     setTaskList(updatedList);
//   };

//   // 🔥 Delete task by index
//   const deleteTask = (index) => {
//     const updatedList = [...taskList];
//     updatedList.splice(index, 1);
//     setTaskList(updatedList);
//   };

//   // ✍️ Update task at a specific index
//   const updateListArray = (updatedTask, index) => {
//     const updatedList = [...taskList];
//     updatedList[index] = updatedTask;
//     setTaskList(updatedList);
//   };

//   return (
//      <>
//       <div className="header text-center p-3 bg-light">
//         <h3>Todo List Application</h3>
//         <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
//           Create Task
//         </button>
//       </div>

//       <div className="task-container p-4">
//         {taskList.length === 0 ? (
//           <p className="text-center">No tasks available. Please add a task.</p>
//         ) : (
//           taskList.map((obj, index) => (
//             <Card
//               key={index}
//               taskObj={obj}
//               index={index}
//               deleteTask={deleteTask}
//               updateListArray={updateListArray}
//             />
//           ))
//         )}
//       </div>

//       <CreateTask toggle={toggle} modal={modal} save={saveTask} />
//     </>
//   );
// };

// export default TodoList;

