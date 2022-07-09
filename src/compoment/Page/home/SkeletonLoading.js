import classNames from 'classnames/bind';
import styles from './home.module.scss';
import Skeleton from 'react-loading-skeleton';
import LoadingSliderHome from '~/compoment/Loading/SlideHome/SliderHome';
const sx = classNames.bind(styles);
function Loadding() {
    return (
        <div className={sx('wrapper')}>
            <LoadingSliderHome />
            <div className={sx('findProducts')}> Lastes Products</div>
            <div className={sx('findProducts-button')}>
                <button className={sx('find')}>All</button>
                <button className={sx('find')}>Men's Clothing</button>
                <button className={sx('find')}>Women's Clothing</button>
                <button className={sx('find')}>Jewelery</button>
                <button className={sx('find')}>Electronic</button>
            </div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className={sx('col-md-3 mb-4')}>
                        <Skeleton width={'100%'} />
                    </div>
                    <div className={sx('col-md-3 mb-4')}>
                        <Skeleton width={'100%'} />
                    </div>
                    <div className={sx('col-md-3 mb-4')}>
                        <Skeleton width={'100%'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loadding;
