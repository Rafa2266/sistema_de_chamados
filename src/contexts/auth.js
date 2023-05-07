import { createContext, useState } from "react";

export const AuthContext= createContext({})

function AuthProvider({children}){
    const [user,setUser]=useState(null)
    function signin(email,password){
        console.log(email,password)
        alert("Login")
    }
    return (
    <AuthContext.Provider value={{
        signed:!!user,
        user,
        signin
        }}>
        {children}
    </AuthContext.Provider>
    );
}
export default AuthProvider