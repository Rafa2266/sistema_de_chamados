import "./signin.css"
import logo from "../../assets/logo.png"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
export default function SignIn() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const {signin, loadingAuth}=useContext(AuthContext);

    async function handleSubmit(e){
        e.preventDefault();
        if(email!=='' && senha!==''){
            await signin(email,senha)
        }
    }
    return (
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="Logo do sistema de chamadas" />
                </div>
                <form onSubmit={handleSubmit}>
                    <h1>Entrar</h1>
                    <input type="text" placeholder="emial@email.com" value={email}
                    onChange={(e)=>setEmail(e.target.value)} />
                    <input type="password" placeholder="********" value={senha}
                    onChange={(e)=>setSenha(e.target.value)} />

                    <button type="submit" >{loadingAuth ? "Carregando...":"Acessar"}</button>

                </form>
                <Link to="/register">Criar uma conta</Link>
            </div>
        </div>
    );
}