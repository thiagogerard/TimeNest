import { useState, useEffect } from 'react';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from '../../services/taskService';
import { toast } from 'react-toastify';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [weight, setWeight] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editCategory, setEditCategory] =useState('');


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

    if (!title.trim() || !category.trim()) {
      toast.warn('Fill out the title and category!');
      return;
    }

    try {
      const newTask = await createTask({
        title,
        category,
        weight,
        dueDate,
      });

      console.log('tarefa criada com sucesso:', newTask)

      setTasks(prev => [newTask, ...prev]);
      setTitle('');
      setCategory('');
      setWeight(10);
      setDueDate('');

      toast.success('Task successfully created!')
    } catch (err) {
      console.error('Error creating task:', err)
      toast.error('Error creating task!')
    }
  }

  async function handleDelete(id) {
    try {
      await deleteTask(id);
      setTasks(prev => prev.filter(task => task._id !== id))

      toast.success('Task successfully deleted!')
    } catch (err) {
      console.log('Error deleting task:', err)
      toast.error('Error deleting task!')
    }
  }

  async function handleComplete(id) {
    try{
      const updatedTask = await updateTask(id, {status: 'completed'});

      setTasks(prev => 
        prev.map(task => 
          task._id === id ? updatedTask : task
        )
      );

      toast.success('Task successfully updated!')
    } catch (err) {
      console.error('Error completing task:', err);
      toast.error('Error updating task!')
    }
  }

  function startEditing(task) {
    setEditingId(task._id);
    setEditTitle(task.title);
    setEditCategory(task.category);
  }

  async function handleEditSave(id) {
    try {
      const updatedTask = await updateTask(id, {
        title: editTitle,
        category: editCategory
      });

      setTasks(prev =>
        prev.map(task =>
          task._id === id ? updatedTask : task
        )
      );
      setEditingId(null);

      toast.success('Task successfully edited!')
    } catch (err) {
      console.error('Error editing task:', err);
      toast.error('Error editing task!')
    }
  }

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const todayStr = `${yyyy}-${mm}-${dd}`;
  
  const todaysTasks = tasks.filter(task =>
    task.dueDate?.slice(0, 10) === todayStr
  );
  
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
          onChange={e => setDueDate(e.target.value)}
        />
        <button type="submit">Create task</button>
      </form>

      <ul>
        {todaysTasks.length === 0 ? (
          <p>You still have no tasks for today.</p>
        ) : (
          todaysTasks.map(task => (
            <li 
              key={task._id}
              className={task.status === 'completed' ? 'text-gray-400 line-through opacity-60' : ''}
            >
              {editingId === task._id ? (
                <>
                  <input 
                    type="text"
                    value={editTitle}
                    onChange={e => setEditTitle(e.target.value)}
                  />
                  <input 
                    type="text"
                    value={editCategory}
                    onChange={e => setEditCategory(e.target.value)}
                  />
                  <button onClick={() => handleEditSave(task._id)}>Save</button>
                  <button onClick={() => setEditingId(null)}>Cancel</button>
                </>
              ) : (
                <>
                  {task.title} - {task.category} - {task.status}
                  {task.status === 'pending' && (
                    <button onClick={() => handleComplete(task._id)}>Complete</button>
                  )}
                  <button onClick={() => handleDelete(task._id)}>Delete</button>
                  <button onClick={() => startEditing(task)}>Edit</button>
                </>
              )}
            </li>
          ))
        )
        }
      </ul>
    </div>
  )
}
  