import { useEffect, useState } from "react";
import { getTasks } from "../../services/taskService";

export default function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [weight, setWeight] = useState('');
    const [dueDate, setDueDate] = useState('');

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

    async function handleCreateTask(e) {
      e.preventDefault();

      try {
        const newTask = await createTask({
          title,
          category,
          weight,
          dueDate,
        });

        setTasks(prev => [newTask, ...prev]);
        setTitle('');
        setCategory('');
        setWeight(10);
        setDueDate('');
      } catch (err) {
        console.error('Error creating task:', err)
      }
    }

    return (
      <div>
        <h1>Your tasks</h1>

        <form onSubmit={handleCreateTask}>
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <select
            value={weight}
            onChange={e => setWeight(Number(e.target.value))}
          >
            <option value={10}>Light (10)</option>
            <option value={25}>Medium (25)</option>
            <option value={40}>High (40)</option>
          </select>
          <input
            type="date"
            value={dueDate}
            onChange={e => setDueDate(e.target,value)}
          />
          <button type="submit">Create task</button>
        </form>

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
  