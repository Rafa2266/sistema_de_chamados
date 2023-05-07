import "./../SignIn/signin.css"
import logo from "../../assets/logo.png"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        if(email!=='' && senha!=='' && nome!==''){
            alert("Cadastro")
        }
    }

    return (
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="Logo do sistema de chamadas" />
                </div>
                <form onSubmit={handleSubmit}>
                    <h1>Nova Conta</h1>
                    <input type="text" placeholder="Nome" value={nome}
                    onChange={(e)=>setNome(e.target.value)} />
                    <input type="text" placeholder="emial@email.com" value={email}
                    onChange={(e)=>setEmail(e.target.value)} />
                    <input type="password" placeholder="********" value={senha}
                    onChange={(e)=>setSenha(e.target.value)} />

                    <button type="submit" >Cadastrar</button>

                </form>
                <Link to="/">Já possuo uma conta!</Link>
            </div>
        </div>
    );
}