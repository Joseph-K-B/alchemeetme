import { createContext, useContext, useEffect, useState } from 'react';
import { fetchUser } from '../services/user';

const UserCtx = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        fetchUser()
          .then((fetchedUser) => {
            setUser(fetchedUser)
          })
          .catch((error) => {
            throw new Error(`Error: ${error}`)
          })
      }, []);

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