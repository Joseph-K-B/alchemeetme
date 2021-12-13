import { createContext, useContext, useState } from 'react';

const UserCtx = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState({})
    return <UserCtx.Provider value={{ user, setUser }}>{children}</UserCtx.Provider>
}

const useUser = () => {
    const ctx = useContext(UserCtx);

    if (ctx === undefined) {
        throw new Error('useUser can only be called as a child of UserContext Provider')
    }

    return ctx
}

export { UserProvider, useUser }