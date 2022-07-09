import Home from '../Page/home';
import Products from '../component/Products';
import Carts from '../Page/Carts';
import ProductsItem from '../Page/ProductsItem';

export const publicRouter = [
    { path: '/', component: Home },
    // {path:'/products', component: Products },
    { path: '/products/:id', component: ProductsItem },
    { path: '/carts', component: Carts },
];
