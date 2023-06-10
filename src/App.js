import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/cadastro" element={<Cadastro></Cadastro>}></Route>

      </Routes>
    </Router>

  );
}

export default App;
