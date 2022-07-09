import Header from '../header/Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Footer from '../Footer/Footer';
const sx = classNames.bind(styles);
function DefaultLayOut({ children }) {
    return (
        <div className={sx('wrapper')}>
            <Header />
            <div className={sx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayOut;
