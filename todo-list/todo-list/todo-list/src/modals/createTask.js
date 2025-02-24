
import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const CreateTask = ({ modal, toggle, save, editTask }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('Pending');
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [typeError, setTypeError] = useState('');

  useEffect(() => {
    if (editTask) {
      setTaskName(editTask.Name);
      setDescription(editTask.Description);
      setDueDate(editTask.DueDate);
      setStatus(editTask.Status);
    } else {
      setTaskName('');
      setDescription('');
      setDueDate('');
      setStatus('Pending');
    }
  }, [editTask, modal]);


  useEffect(() => {
    if (dueDate) {
      const today = new Date().toISOString().split('T')[0];
      setStatus(dueDate < today ? 'Completed' : 'Pending');
    }
  }, [dueDate]);

  const validateForm = () => {
    let valid = true;

    if (!taskName.trim()) {
      setTitleError('Title is required.');
      valid = false;
    } else {
      setTitleError('');
    }

    if (!description.trim()) {
      setDescriptionError('Description is required.');
      valid = false;
    } else {
      setDescriptionError('');
    }

    return valid;
  };
  
  const handleSave = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const taskObj = {
        Name: taskName,
        Description: description,
        DueDate: dueDate,
        Status: status,
      };
      save(taskObj);
      toggle();
    }
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>{editTask ? 'Edit Task' : 'Create Task'}</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className={`form-control ${titleError ? 'is-invalid' : ''}`}
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            {titleError && <div className="invalid-feedback">{titleError}</div>}
          </div>

          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className={`form-control ${descriptionError ? 'is-invalid' : ''}`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {descriptionError && (
              <div className="invalid-feedback">{descriptionError}</div>
            )}
          </div>

          <div className="form-group">
            <label>Due Date</label>
            <input
              type="date"
              className="form-control"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <input
              type="text"
              className="form-control"
              value={status}
              readOnly
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
        {editTask ? 'Update' : 'Create'}
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
