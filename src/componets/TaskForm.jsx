import "./taskForm.css";

const TaskForm = () => {
  return (
    <>
      <form className="form_task">
        <input
          className="input_task"
          type="text"
          name="text"
          id="input-text"
          placeholder="Input any task"
        />
        <button className="btn_task">Add task</button>
      </form>
    </>
  );
};

export default TaskForm;
