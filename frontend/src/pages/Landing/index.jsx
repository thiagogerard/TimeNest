import { useNavigate } from "react-router-dom";
import logo from '../../assets/timenest.png'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-screen bg-cream md:bg-darkGreen">
      <header className="h-[70vh] flex flex-col items-center justify-center px-6 text-center relative overflow-hidden md:flex-none md:pb-0 md:px-20 md:my-40 md:mx-40 md:border md:rounded-2xl md:shadow-lg md:bg-cream 2xl:mx-60">
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-emerald-100 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-emerald-200 rounded-full blur-3xl"></div>

        <div className="md:flex md:flex-row md:justify-between md:w-full md:px-20 2xl:px-40">
          <div className="flex items-center ml-10 space-x-0 mb-7 z-10">
            <img
              src={logo}
              alt="TimeNest logo"
              className="w-20 h-20 md:w-24 md:h-24 drop-shadow-md"
            />
            <h1 className="text-3xl font-bold text-emerald-600 md:text-4xl">TimeNest</h1>
          </div>
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-emerald-600 mb-3 z-10">
              Organize your day,<br></br> your way.
            </h2>
            <p className="text-gray-600 mb-8 max-w-xs z-10">
              TimeNest helps you plan tasks, track progress, and build better habits
              with a daily credit system.
            </p>
            <button
              onClick={() => navigate('/register')}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 text-white font-semibold shadow-lg hover:opacity-90 transition z-10"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate('/login')}
              className="mt-4 text-sm text-emerald-600 underline z-10"
            >
              Already have an account? Log in
            </button>
          </div>
        </div>

      <footer className="hidden md:block pt-10 text-center text-black text-xs">
        © 2025 TimeNest
      </footer>
       
    </header>
      

      <section className="flex-none px-6 py-1 w-full md:hidden">
        <div className="max-w-md mx-auto bg-green p-6 rounded-xl space-y-2">
          <h3 className="text-2xl font-semibold text-white">Features</h3>
          <div className="space-y-4">
            {/* Task Management */}
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-white rounded-full shadow">
                {/* ícone no centro */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-emerald-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Task Management</h4>
                <p className="text-gray-600 text-sm">
                  Create, edit and organize your tasks.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 bg-white rounded-full shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-emerald-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Daily Credits</h4>
                <p className="text-gray-600 text-sm">
                  Earn and track your daily energy credits.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 bg-white rounded-full shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-emerald-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Weekly Reports</h4>
                <p className="text-gray-600 text-sm">
                  See your progress and habits over the week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="h-[8vh] flex-none px-6 py-6 text-center text-black text-xs md:hidden">
        © 2025 TimeNest
       </footer>
    </div>
  );
}
                                