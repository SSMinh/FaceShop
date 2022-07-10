import { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const auth = getAuth();
export const AuthContext = createContext();
function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const history = useNavigate();
    useEffect(() => {
        const unregisterAuthObserver = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const { displayName, email, uid, photoURL } = user;
                setUser({ displayName, email, uid, photoURL });
                history('/');
                return;
            }
            history('/login');
        });
        return () => unregisterAuthObserver();
    }, [history]);
    return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
