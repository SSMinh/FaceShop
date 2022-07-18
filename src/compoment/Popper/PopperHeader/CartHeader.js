import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './PopperHeader.module.scss';
const sx = classNames.bind(styles);


function CartHeader({ data }) {
    const [isShow, setIsShow] = useState(false)
    const leng = data.length > 0
    useEffect(() => {
        setIsShow(leng)
    }, [leng])

    return (
        <div className={sx('carts')}>
            <FontAwesomeIcon icon={faCartShopping} />
            {isShow && (
                <div className={sx('carts-products')}>
                    <span className={sx('carts-title')}>{data.length}</span>
                </div>
            )}
        </div>
    );
}

export default CartHeader;