import { useEffect, useState } from "react";
import { getTasks } from "../../services/taskService";

export default function Tasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      async function fetchTasks() {
        try {
          const data = await getTasks();
          setTasks(data);
        } catch (err) {
          console.log('Error when searching for tasks:', err)
        }
      }

      fetchTasks();
    }, []);

    return (
      <div>
        <h1>Your tasks</h1>
        <ul>
          {tasks.length === 0 ? (
            <p>You still have no tasks.</p>
          ) : (
            tasks.map(task => (
              <li key={task._id}>
                {task.title} - {task.category} - {task.status}
              </li>
            ))
          )
          }
        </ul>
      </div>
    )
}
  