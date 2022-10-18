import { createContext, useReducer } from 'react'

import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode
}

interface AuthContextValue {
    name: string;
    checked: string | null;
    handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

export const AuthContext = createContext<AuthContextValue>(null!)

export const authReducer = (state: any, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case 'LOGIN': 
            return { user: action.payload}
        case 'LOGOUT':
            return { user: null }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }:Props) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
    })

    console.log('AuthContext state: ', state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}