import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';
import SyncLoader from 'react-spinners/SyncLoader';

import styles from './home.module.scss';
import Products from '../../component/Products';
import SwiperSliders from './slider/swiperSliders';
import WrapperLoading from '~/compoment/Loading/Loading';
import image from '~/assets/image';

const sx = classNames.bind(styles);
function Home() {
    const [datas, setDatas] = useState([]);
    const [style, setStyle] = useState('');
    const [loading, setLoading] = useState(true);
    const categories = [
        {
            img: image.all,
            title: `All`,
            text: '',
        },
        {
            img: 'https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
            title: `Men's Clothes`,
            text: `men's clothing`,
        },
        {
            img: 'https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn',
            title: ` Women Clothes`,
            text: `women's clothing`,
        },
        {
            img: 'https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn',
            title: `Consumer Electronics`,
            text: 'electronics',
        },
        {
            img: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
            title: `Jewelery`,
            text: 'jewelery',
        },
    ];
    useEffect(() => {
        setLoading(true);
        const getProduct = async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            setDatas(response.data);
            setLoading(false);
        };
        getProduct();
    }, []);
    const renderProduct = () => {
        const list = datas.filter((res) => {
            return res.category.includes(style);
        });
        return list.map((product) => {
            return (
                <div key={product.id} className={sx('col-md-2 col-sm-6 col-6 mb-4')}>
                    <Products data={product} />
                </div>
            );
        });
    };
    const renderCategories = () => {
        return categories.map((item, index) => (
            <div key={index} onClick={() => handleType(item.text)} className={sx('findProducts-styleItem')}>
                <img src={item.img} className={sx('findProducts-styleItem-Bg')} />
                <span>{item.title}</span>
            </div>
        ));
    };
    const handleType = (text) => {
        setStyle(text);
    };
    return loading ? (
        <WrapperLoading>
                    <SyncLoader color={'#F37A24'} size={10} />
        </WrapperLoading>
    ) : (
        <div className={sx('wrapper container')}>
            <SwiperSliders />
            <div className={sx('header-section__header')}>
            <div className={sx('findProducts')}> categories</div>
            </div>
            <div className={sx('findProducts-style')}>{renderCategories()}</div>
            <div className={sx('inner')}>
                <div className="container">
                    <div className="row">{renderProduct()}</div>
                </div>
            </div>
        </div>
    );
}
export default Home;
