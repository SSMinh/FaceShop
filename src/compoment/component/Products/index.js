import React from 'react';
import classNames from 'classnames/bind';
import styles from './products.module.scss';
import { NavLink } from 'react-router-dom';
const sx = classNames.bind(styles);
function Products({ data }) {
    return (
        <div className={sx('wrapper')}>
            <NavLink to={`/products/${data.id}`}>
                <div className={sx('imgProduct')} style={{ backgroundImage: `url('${data.image}')` }} alt="abc" />
                <div className={sx('informProduct')}>
                    <h3 className={sx('nameProduct')}>{data.title}</h3>
                    <h3 className={sx('sellProduct')}>${data.price}</h3>
                    <span className={sx('abcProduct')}>{data.category}</span>
                </div>
            </NavLink>
        </div>
    );
}

export default Products;
