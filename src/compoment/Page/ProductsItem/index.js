import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import styles from './productItem.module.scss';
import classNames from 'classnames/bind';
import { buyAction } from '~/compoment/redux/actions';
import SyncLoader from 'react-spinners/SyncLoader';
import WrapperLoading from '~/compoment/Loading/Loading';
const sx = classNames.bind(styles);
function ProductsItem() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const getProduct = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(response.data);
            setLoading(false);
        };
        getProduct();
    }, [id]);
    const dispatch = useDispatch();
    const hanldeBuy = () => {
        dispatch(
            buyAction({
                ...product,
                completed: false,
            }),
        );
    };
    return loading ? (
        <WrapperLoading>
            <SyncLoader color={'#F37A24'} size={10} />
        </WrapperLoading>
    ) : (
        <div className={sx('wrapper container')}>
            <div className={sx('row')}>
                <div className={sx('col-md-6')}>
                    <img className={sx('imgItem')} src={product.image} alt="abc" />
                </div>
                <div className={sx('col-md-6 d-flex align-items-center')}>
                    <div className={sx('informItem')}>
                        <div className={sx('informTitle')}>
                            <h2 className={sx('abcItem')}>{product.category}</h2>
                            <h3 className={sx('nameItem')}>{product.title}</h3>
                            <h3 className={sx('sellItem')}>${product.price}</h3>
                            <h3 className={sx('descriptionItem')}>{product.description}</h3>
                        </div>
                        <div className={sx('buttonCart')}>
                            <Link to={'/cart'} className={sx('btnItem')}>
                                Go to cart
                            </Link>
                            <button onClick={hanldeBuy} className={sx('btnItem')}>
                                Buy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsItem;
