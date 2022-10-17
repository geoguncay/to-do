import "./task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Tasks = ({ text, completed }) => {
  return (
    <>
      <div className="task_container">
        <div className={completed ? "completed" : "task_text"}>{text}
          
        </div>
        <div className="task_icon_content">
          <AiOutlineCloseCircle className="iconTask" />
        </div>
      </div>
    </>
  );
};

export default Tasks;
