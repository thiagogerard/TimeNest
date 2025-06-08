import "./Landing.css"

function Landing() {
    return (
        //<div className="w-full bg-[#e4f2d0] h-screen flex items-center justify-center">
            <div className="bg-[#08261f] h-screen px-10 py-8 w-full  text-white"> 
                <header className="w-full px-6">
                    <div className="flex justify-between items-center max-w-4xl mx-auto">
                        <div className="flex items-center gap-2">
                            <img src="../img/timenest.png" alt="TimeNest logo" className="w-20 h-20" />
                            <h2 className="text-green text-4xl font-semibold font-sans">TimeNest</h2>
                        </div>
                        <button className="text-sm bg-green px-3 py-1 rounded-md text-white hover:bg-accent transition">Login</button>
                    </div>
                </header>


                <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="flex flex-col gap-6 mx-auto max-w-md text-left">
                        <h1 className="text-white font-sans text-5xl leading-tight">
                        Manage your<br />time<br />efficiently
                        </h1>
                        <button className="bg-green text-white px-6 py-2 rounded-md hover:bg-accent transition w-fit">
                        Try it now
                        </button>
                    </div>

                    <div className="relative w-[400px] h-[400px] mx-auto">
                        <img src="../img/bg-calendar.png" className="w-full h-full" />
                        <img src="../img/calendar-icon.png" className="absolute top-1/2 left-1/2 w-[230px] h-[230px] -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </main>


                <footer className="mt-10 flex justify-center gap-10 text-green text-sm">
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Features</a>
                    <a href="#" className="hover:underline">Contact</a>
                </footer>
            </div>
        //</div>
    );
}
  
  export default Landing;
  