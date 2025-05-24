import React from "react";
import { Button } from "./Button";


export const Header = () => {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between border-b border-gray-300">
      <div className="text-4xl font-bold text-black">
        <span className="text-black">Met</span><span className="text-yellow-600">ric</span>
      </div>

      <div className="space-x-4">
        <button className="text-sm text-gray-600 hover:text-black">Iniciar Sesión</button>
        <Button variant="gradient">Empezar Ahora</Button>
      </div>
    </header>
  );
};
