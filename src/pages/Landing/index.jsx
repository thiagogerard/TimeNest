import "./Landing.css"

function Landing() {
    return (
        <div className="w-full bg-[#e4f2d0] h-screen flex items-center justify-center">
            <div className="bg-[#08261f] rounded-2xl p-10 w-full max-w-4xl text-white"> 
                <header>
                    <div className="flex items-center">
                        <img src="../img/timenest.png" alt="Logo do timenest" className="logo_section_img"/>
                        <h2>TimeNest</h2>
                    </div>
                    <button>login</button>
                </header>

                <main>
                    <h3>Manage your time efficiently</h3>
                    <button>Try it now</button>
                </main>

                <footer>
                    <div>
                        <a href="">About</a>
                        <a href="">Features</a>
                        <a href="">Contact</a>
                    </div>
                </footer>
            </div>
        </div>
    );
}
  
  export default Landing;
  