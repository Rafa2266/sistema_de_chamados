import "./../SignIn/signin.css"
import logo from "../../assets/logo.png"
import { useContext, useState } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../../contexts/auth";



export default function SignUp(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const {signup,loadingAuth}= useContext(AuthContext)

    async function handleSubmit(e){
        e.preventDefault();
        if(email!=='' && senha!=='' && nome!==''){
            await signup(nome,email,senha)
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
                    <input type="text" placeholder="email@email.com" value={email}
                    onChange={(e)=>setEmail(e.target.value)} />
                    <input type="password" placeholder="********" value={senha}
                    onChange={(e)=>setSenha(e.target.value)} />

                    <button type="submit" >{loadingAuth ? "Carregando...":"Cadastrar"}</button>

                </form>
                <Link to="/">Já possuo uma conta!</Link>
            </div>
        </div>
    );
}