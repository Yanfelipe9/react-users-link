import {Routes as Rotas, Route} from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

function Routes() {
    return (
        <Rotas>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
        </Rotas>
    )
}

export default Routes;