import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './HeaderItemCart.module.scss';
const sx = classNames.bind(styles);
function CartItem({ data }) {
    return (
        <Link to={'/cart'} className={sx('wrapper')}>
            <img className={sx('ImgProducts')} src={data.image} />
            <div className={sx('cart')}>
                <h4 className={sx('cartTitle')}>{data.title}</h4>
                <span className={sx('sell')}>${data.price}</span>
            </div>
        </Link>
    );
}

export default CartItem;
