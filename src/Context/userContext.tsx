import { createContext, useMemo, useState } from "react";


export const UserContext = createContext();

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    const value = useMemo(() => ({
        user,
        setUser
    }), [user])
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}