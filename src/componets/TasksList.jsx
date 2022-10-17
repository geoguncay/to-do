import { useState } from "react";
import TaskForm from "./TaskForm";
import Tasks from "./Tasks";

const TasksList = () => {
  const [task, setTask] = useState([]) 

  return (
    <>
      <TaskForm/>
      <div>
        {
          task.map((tares) => 
          <Tasks
            text ={task.text}
            completed = {task.completed}
          />
          )
        }
      </div>
    </>
  );
};

export default TasksList;
