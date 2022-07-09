import classNames from 'classnames/bind';
import styles from './Loading.module.scss';
const sx = classNames.bind(styles);
function WrapperLoading({ children }) {
    return <div className={sx('wrapper')}>{children}</div>;
}

export default WrapperLoading;
