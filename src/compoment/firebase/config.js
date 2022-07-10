import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBlxYFMYMxqbWGaLFLAO1umAw6pKuy0w7M',
    authDomain: 'fakeshop-c2988.firebaseapp.com',
    projectId: 'fakeshop-c2988',
    storageBucket: 'fakeshop-c2988.appspot.com',
    messagingSenderId: '423770153453',
    appId: '1:423770153453:web:d9dc73243b2292b94447e4',
    measurementId: 'G-J5BM10VF6Q',
};
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
