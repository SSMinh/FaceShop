import Home from '../Page/home';
import Login from '../Page/Login/login';
import Cart from '../Page/Carts';
import ProductsItem from '../Page/ProductsItem';

export const publicRouter = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/products/:id', component: ProductsItem },
    { path: '/cart', component: Cart },
];
