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
    <div className="flex flex-col min-h-screen bg-cream relative overflow-hidden">
    <div className="absolute -top-20 -left-20 w-40 h-40 bg-emerald-100 rounded-full blur-3xl" />
    <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-emerald-200 rounded-full blur-3xl" />

    <header className="z-10 flex flex-col items-center pt-16 px-6">
      <h1 className="text-2xl font-bold text-emerald-600 mb-4">Your Tasks</h1>
      <form
        onSubmit={handleCreateTask}
        className="w-full bg-white p-4 rounded-xl shadow-lg space-y-3"
      >
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        <div className="flex space-x-2">
          <select
            value={weight}
            onChange={e => setWeight(Number(e.target.value))}
            className="flex-1 border border-gray-300 rounded px-3 py-2"
          >
            <option value={10}>Light</option>
            <option value={25}>Medium</option>
            <option value={40}>High</option>
          </select>
          <input
            type="date"
            value={dueDate}
            onChange={e => setDueDate(e.target.value)}
            className="flex-1 border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-emerald-400 to-emerald-600 text-white py-2 rounded-full font-semibold shadow"
        >
          Criar tarefa
        </button>
      </form>
    </header>

    <main className="z-10 flex-1 px-6 pt-6">
      {todaysTasks.length === 0 ? (
        <p className="text-center text-gray-600">No tasks for today.</p>
      ) : (
        <ul className="space-y-4">
          {todaysTasks.map(task => (
            <li
              key={task._id}
              className={`bg-white p-4 rounded-xl shadow flex justify-between items-center ${
                task.status === 'completed'
                  ? 'opacity-60 line-through'
                  : ''
              }`}
            >
              <div>
                <h4 className="font-medium">{task.title}</h4>
                <p className="text-sm text-gray-500">{task.category}</p>
              </div>
              <div className="flex items-center space-x-2">
                {task.status === 'pending' && (
                  <button
                    onClick={() => handleComplete(task._id)}
                    className="text-emerald-600"
                  >
                    ✓
                  </button>
                )}
                <button
                  onClick={() => handleDelete(task._id)}
                  className="text-red-500"
                >
                  🗑
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>

    <footer className="z-10 px-6 py-4 text-center text-gray-500 text-xs">
      © 2025 TimeNest
    </footer>
  </div>
  )
}
  