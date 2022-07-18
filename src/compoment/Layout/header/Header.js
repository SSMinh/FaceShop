import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react'
import styles from './Header.module.scss';
import SearchHeader from '~/compoment/component/SearchHeader/SearchHeader';
import LoginAvatar from './HeaderLogin';
import PopperHeader from '~/compoment/Popper/PopperHeader/PopperHeader';
import HeaderBar from './headerBar/bar';
import { useSelector } from 'react-redux';
import { listCarts } from '~/compoment/redux/selector';
import CartHeader from '~/compoment/Popper/PopperHeader/CartHeader';

const sx = classNames.bind(styles);
function Header() {
    const cartProducts = useSelector(listCarts);
    const hasRememberAccount = localStorage.getItem('user');
    const [show, setShow] = useState(false)
    const hanldeShowBar = (text) => {
        if (text === 'open') {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    return (
        <div className={sx('wrapper')}>
            <div className={sx('inner')}>
                <div className={sx('d-block d-sm-block d-md-none')}>
                    <button onClick={() => hanldeShowBar('open')} className={sx('bar')}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
                {show && <HeaderBar onShow={hanldeShowBar} />}

                <Link to={'/'} className={sx('left')}>
                    FakeShop
                </Link>
                <div className={sx('d-none d-md-block')}>
                    <SearchHeader />
                </div>
                <div className={sx('right')}>
                    <div className={sx('login ')}>
                        {hasRememberAccount ? (
                            <LoginAvatar />
                        ) : (
                            <Link to={'/login'} className={sx('login_btn d-none d-md-flex')}>
                                Log in
                            </Link>
                        )}
                    </div>
                    <PopperHeader />
                    <div className=' d-block d-md-none '>
                        <Link to={'/cart'} className={sx('carts')}>
                            <CartHeader data={cartProducts} />
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    );
}
export default Header;
