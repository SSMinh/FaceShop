import { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
export const AuthContext = createContext();
function AuthProvider({ children }) {
    const auth = getAuth();
    const [user, setUser] = useState({});
    useEffect(() => {
        const unregisterAuthObserver = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                localStorage.removeItem('user')             
                return;
            }
            const { displayName, email, uid, photoURL } = user;
            setUser({ displayName, email, uid, photoURL });
            localStorage.setItem('user', true);
        });
        return () => unregisterAuthObserver();
    }, []);
    return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
