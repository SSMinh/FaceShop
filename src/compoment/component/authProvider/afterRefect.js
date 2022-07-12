import { getAuth, onAuthStateChanged } from 'firebase/auth';

const getFirebaseToke = async () => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    if (currentUser) return currentUser;
    const hasRememberAccount = localStorage.getItem('user');

    if (!hasRememberAccount) return null;
    return new Promise((resolve, reject) => {
        const unregisterAuthObserver = onAuthStateChanged(auth, async (user) => {
            const waitTimer = setTimeout(() => {
                reject(null);
            }, 10000);
            if (!user) {
                reject(null);
            }
            const { displayName, email, uid, photoURL } = user;
            console.log({ displayName, email, uid, photoURL });
            resolve({ displayName, email, uid, photoURL });
            unregisterAuthObserver();
            clearTimeout(waitTimer);
        });
    });
};

export const user = getFirebaseToke();
