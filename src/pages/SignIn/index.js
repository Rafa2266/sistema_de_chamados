import "./signin.css"
import logo from "../../assets/logo.png"
import { useState } from "react";
import { Link } from "react-router-dom";
export default function SignIn() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="Logo do sistema de chamadas" />
                </div>
                <form>
                    <h1>Entrar</h1>
                    <input type="text" placeholder="emial@email.com" value={email}
                    onChange={(e)=>setEmail(e.target.value)} />
                    <input type="password" placeholder="********" value={senha}
                    onChange={(e)=>setSenha(e.target.value)} />

                    <button type="submit" >Acessar</button>

                </form>
                <Link to="/register">Criar uma conta</Link>
            </div>
        </div>
    );
}