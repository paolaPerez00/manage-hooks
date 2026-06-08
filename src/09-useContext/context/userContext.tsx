import { createContext, useState, type PropsWithChildren, type ReactNode } from "react"
import { users, type User } from "../data/user-mock.data";

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

//interface
interface UserContextProps {
    // state
    authStatus: AuthStatus,
    user: User | null

    // Methods
    login: (userId: number) => boolean;
    logout: () => void;
}

//Create context
export const UserContext = createContext({} as UserContextProps);

// HOC
export const UserContextProvider = ({ children }: PropsWithChildren) => {

    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = (userId: number) => {
        const user = users.find(user => user.id === userId)
        if (!user) {
            setUser(null);
            setAuthStatus('not-authenticated')
            return false;
        }
        setUser(user);
        setAuthStatus('authenticated')
        return true;
    }

    const handleLogout = () => {
        setAuthStatus('not-authenticated')
        setUser(null);
    }

    // const [name, setName] = useState('Fernando')
    return <UserContext
        value={{
            authStatus: authStatus,
            user: user,
            login: handleLogin,
            logout: handleLogout
        }}>
        {children}
    </UserContext>;
}

