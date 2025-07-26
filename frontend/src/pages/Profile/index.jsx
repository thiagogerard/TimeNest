import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTasks } from "../../services/taskService";
import logo from "../../assets/timenest.png";
import { toast } from "react-toastify";

export default function Profile() {
  const [username, setUsername] = useState("");
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setUsername(localStorage.getItem("username") || "");
    async function loadTasks() {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (err) {
        console.error("Erro ao buscar tarefas no perfil:", err);
      }
    }
    loadTasks();
  }, []);

  const energy = Number(localStorage.getItem("dailyEnergy")) || 0;
  const [energyInput, setEnergyInput] = useState(energy);

  const todayStr = new Date().toISOString().slice(0, 10);
  const totalAll = tasks.length;
  const totalToday = tasks.filter(
    t => t.createdAt?.slice(0, 10) === todayStr
  ).length;
  const completed = tasks.filter(t => t.status === "completed").length;
  const pendingToday = tasks.filter(
    t => t.status === "pending" && t.dueDate?.slice(0, 10) === todayStr
  ).length;

  function handleLogout() {
    localStorage.clear();
    navigate("/login");
  }

  function handleSaveEnergy() {
    localStorage.setItem("dailyEnergy", energyInput);
    window.dispatchEvent(new CustomEvent("energyChange", { detail: energyInput }));
    toast.success("Daily energy updated!");
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-cream px-6 text-center relative overflow-hidden">
      <div className="absolute -top-16 -left-16 w-40 h-40 bg-emerald-100 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-emerald-200 rounded-full blur-3xl" />

      <div className="z-10 flex flex-col items-center space-y-6">
        <img
          src={logo}
          alt="TimeNest logo"
          className="w-16 h-16 drop-shadow-md"
        />
        <h1 className="text-2xl font-bold text-emerald-600">Your Profile</h1>

        <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg space-y-4 text-left">
          <p>
            <span className="font-medium">Username:</span> {username}
          </p>
          <p>
            <span className="font-medium">Current Energy:</span> {energy}
          </p>
          <p>
            <span className="font-medium">Total Today:</span> {totalToday}
          </p>
          <p>
            <span className="font-medium">Total All:</span> {totalAll}
          </p>
          <p>
            <span className="font-medium">Completed:</span> {completed}
          </p>
          <p>
            <span className="font-medium">Pending Today:</span> {pendingToday}
          </p>

          <div className="mt-4 space-y-2">
            <label className="block font-medium">Set Daily Energy:</label>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                min="0"
                value={energyInput}
                onChange={e => setEnergyInput(Number(e.target.value))}
                className="w-24 border px-2 py-1 rounded"
              />
              <button
                onClick={handleSaveEnergy}
                className="px-3 py-1 bg-emerald-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full py-2 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white font-semibold rounded-full shadow-md hover:opacity-90 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}

