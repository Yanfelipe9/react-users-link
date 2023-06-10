import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import { useState } from "react";

function App() {
  const [cadastroOpen, setCadastroOpen] = useState(false);

  return (
    <>
      <Login>
        <button
          onClick={() => setCadastroOpen(true)}
          type="submit"
          className="flex w-full justify-center mt-3 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Cadastre-se
        </button>
      </Login>
      <Cadastro
        isOpen={cadastroOpen}
        closeCadastro={() => setCadastroOpen(!cadastroOpen)}
      ></Cadastro>
    </>
  );
}

export default App;
