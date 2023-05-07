import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth, db } from "../services/firebaseConnection";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';


export const AuthContext= createContext({})

function AuthProvider({children}){
    const [user,setUser]=useState(null)
    const [loadingAuth,setLoadingAuth]=useState(false)
    const navigate = useNavigate();

    function storageUser(data){
        localStorage.setItem("@ticketsPRO", JSON.stringify(data));
    }

    async function signin(email,password){
        setLoadingAuth(true)
        await signInWithEmailAndPassword(auth,email,password)
        .then((value)=>{
            let uid= value.user.uid
            getDoc()
        })
    }

    async function signup(nome,email,password){
       setLoadingAuth(true);
       await createUserWithEmailAndPassword(auth,email,password).then(async (value)=>{
        let uid=value.user.uid
        setDoc(doc(db,"users",uid),{
            nome:nome,
            avatarUrl:null
        }).then(()=>{
            let data={
                uid:uid,
                nome:nome,
                email:value.user.email,
                avatarUrl:null,
            }

            setUser(data)
            storageUser(data)
            setLoadingAuth(false)
            toast.success("Seja bem vindo ao sistema!!")
            navigate("/dashboard")

        })
       }).catch((error)=>{
        console.log(error)
        toast.error("Erro ao cadastrar")
        setLoadingAuth(false)
       })
    }

    return (
    <AuthContext.Provider value={{
        signed:!!user,
        user,
        signin,
        signup,
        loadingAuth
        }}>
        {children}
    </AuthContext.Provider>
    );
}
export default AuthProvider