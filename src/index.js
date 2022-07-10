import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import store from './compoment/redux/Store';
import 'react-loading-skeleton/dist/skeleton.css';
import { Provider } from 'react-redux';
import GloblaStyle from './compoment/GlobalStyle/GlobalStyle';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GloblaStyle>
                <App />
            </GloblaStyle>
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
