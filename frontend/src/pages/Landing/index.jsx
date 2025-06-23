import { useNavigate } from "react-router-dom";
import logo from '../../assets/timenest.png'

export default function Landing() {
    const navigate = useNavigate();

    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-off-white px-6 text-center">
        <img
          src={logo}
          alt="TimeNest logo"
          className="
            w-53434534 h-24     
            sm:w-32 sm:h-32      
            md:w-40 md:h-40      
            mb-6
            drop-shadow-md
          "
        />
      </main>
    );
}
  