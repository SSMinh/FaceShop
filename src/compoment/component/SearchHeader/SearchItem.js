import classNames from 'classnames/bind';
import styles from './SearchHeader.module.scss';
const sx = classNames.bind(styles);
function SearchItem({ data }) {
    return (
        <div className={sx('wrapperPopper')}>
            <img className={sx('ImgProducts')} src={data.image} />
            <div className={sx('cart')}>
                <h4 className={sx('cartTitle')}>{data.title}</h4>
                <span className={sx('cartprice')}>{data.price} $</span>
            </div>
        </div>
    );
}

export default SearchItem;
