import './app.css'
import TasksList from './componets/TasksList'


function App() {
  return (
    <div className="app_to_do">
      <div className="title_container">
        <h1>To do task</h1>
      </div>
      <div className="to_do_body">
        <h2>My task list</h2>
        <TasksList/>
      </div>
    </div>
  )
}

export default App
