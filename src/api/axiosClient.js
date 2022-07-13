import axios from 'axios';
import queryString from 'query-string';
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
            resolve({ displayName, email, uid, photoURL });

            unregisterAuthObserver();
            clearTimeout(waitTimer);
        });
    });
};
const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    const token = await getFirebaseToke();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        throw error;
    },
);

export default axiosClient;
