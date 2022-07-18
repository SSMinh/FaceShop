import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { listBought, listCarts } from '~/compoment/redux/selector';
import CartItem from '~/compoment/Layout/header/headerCart';
import styles from './PopperHeader.module.scss';
import Empty from '../PopperEmpty/Empty';
const sx = classNames.bind(styles);
function PopperHeader() {
    const cartProducts = useSelector(listCarts);
    const orderProducts = useSelector(listBought);
    const [show, setShow] = useState(false);
    let lenghtProduct = cartProducts.length > 0;
    useEffect(() => {
        setShow(lenghtProduct);
    }, [lenghtProduct]);
    const renderProduct = () => {
        return cartProducts.map((product, index) => {
            return <CartItem key={index} data={product} />;
        });
    };
    return (
        <Tippy
            placement={'bottom-start'}
            interactive
            delay={[0, 500]}
            render={(attrs) => (
                <div className={sx('popperCarts')} tabIndex="-1" {...attrs}>
                    <div
                        className={sx('wrapperPopper')}
                        style={show ? { padding: '0px' } : { padding: '40px 0px', textAlign: 'center' }}
                    >
                        {show && <div className={sx('headerPopper')}>Recently Added Products</div>}
                        <div className={sx('PopperWrapper')}>{show ? renderProduct() : <Empty />}</div>
                        {show && (
                            <div className={sx('PopperPay')}>
                                <span className={sx('PopperPayProduct')}>
                                    {`${orderProducts.length} More Products In Cart`}{' '}
                                </span>
                                <Link to={'/cart'} className={sx('PopperPayCart')}>
                                    View My Shopping Cart
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        >
            <div className=' d-none d-md-block '>
                <div className={sx('carts')}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    {show && (
                        <div className={sx('carts-products')}>
                            <span className={sx('carts-title')}>{cartProducts.length}</span>
                        </div>
                    )}
                </div>
            </div>
        </Tippy>
    );
}

export default PopperHeader;
