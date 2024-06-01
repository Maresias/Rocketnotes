import {createContext} from 'react'

export const AuthContext = createContext({})

function AuthProvider({children}){
    return (
        <AuthContext.Provider value={{name: "Alexandre", email: "alexandre@alexandre.com"}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider}