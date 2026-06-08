import { createContext, useEffect, useState, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-mock.data";

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

//interface
interface UserContextProps {
    // state
    authStatus: AuthStatus;
    user: User | null;
    isAuthenticated: boolean;

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
        setAuthStatus('authenticated');
        localStorage.setItem('userId', userId.toString())
        return true;
    }

    const handleLogout = () => {
        setAuthStatus('not-authenticated')
        setUser(null);
        localStorage.removeItem('userId');

    }


    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            handleLogin(+storedUserId)
            return;
        }
        handleLogout();
    }, [])

    return <UserContext
        value={{
            authStatus: authStatus,
            user: user,
            isAuthenticated: authStatus === 'authenticated',
            login: handleLogin,
            logout: handleLogout
        }}>
        {children}
    </UserContext>;
}

