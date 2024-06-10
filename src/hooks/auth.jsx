import {createContext, useContext, useState, useEffect} from 'react'

import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [data, setData] = useState({})

    async function signIn({email, password}){
        try{
            const response = await api.post("/sessions", { email, password})
            const {user, token} = response.data

            api.defaults.headers['Authorization'] = `Bearer ${token}`
            setData({user, token})

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
            localStorage.setItem("@rocketnotes:token", `Bearer ${token}`)

        }catch(error){
            if(error.response){
                console.log(error.response.data.message)
            }else{
                alert("Não foi possível entrar")
            }
        }
    }

    function signOut(){
        localStorage.removeItem("@rocketnotes:token")
        localStorage.removeItem("@rocketnotes:user")

        setData({})
    }

    async function updateProfile({user}){

        try{
            await api.put("/users", user)
            localStorage.setItem('@rocketnotes:user', JSON.stringify(user))
        }catch(error){

        }
    }

    useEffect(()=>{

        const token = localStorage.getItem("@rocketnotes:token")
        const user = localStorage.getItem("@rocketnotes:user")

        if( token && user ){
            api.defaults.headers['Authorization'] = `Bearer ${token}`

            setData({
                token,
                user : JSON.parse(user)
            })
        }

    },[])

    return (
        <AuthContext.Provider value={{
         signIn, 
         signOut,
         user: data.user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export {AuthProvider, useAuth}