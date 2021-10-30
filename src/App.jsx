import React, { useEffect } from "react";
import { Socials } from "./components/Navigation/Social";
import fish from "./assets/fish.svg";
const App = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("bg-[#101826]");
  }, []);
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="relative flex flex-col items-center">
        <img
          src={fish}
          alt="fish.svg"
          className="absolute transform rotate-12 opacity-20 -bottom-6"
        />
        <h1 className="md:mx-5 mb-4 text-transparent bg-clip-text bg-gradient-to-br from-[#D6F5FF] to-[#D8D6FF] font-bold text-3xl z-10">
          8bitfish coming soon...
        </h1>
        <Socials />
      </div>
    </div>
  );
};

export default App;
