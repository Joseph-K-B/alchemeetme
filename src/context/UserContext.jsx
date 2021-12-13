import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [likes, setLikes] = useState([]);
    const [motto, setMotto] = useState('');
    const [color, setColor] = useState('');
    const [header, setHeader] = useState('');

    return <UserContext.Provider value={{name, setName, avatar, setAvatar, likes, setLikes, motto, setMotto, color, setColor, header, setHeader}}>{children}</UserContext.Provider>
}

const useUser = () => {
    const ctx = useContext(UserContext);

    if (ctx === undefined) {
        throw new Error('useUser can only be called as a child of UserContext Provider')
    }

    return ctx
}

export { UserProvider, useUser }