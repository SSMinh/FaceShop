import classNames from 'classnames/bind';
import { faXmark, faHome, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useRef } from 'react';
import { getAuth } from 'firebase/auth';
import { AuthContext } from '~/compoment/component/authProvider/AuthProvide';
import SearchHeader from '~/compoment/component/SearchHeader/SearchHeader';
import styles from './bar.module.scss';
import { Link } from 'react-router-dom';

const sx = classNames.bind(styles);

function HeaderBar({ onShow }) {
    const refInput = useRef()
    const auth = getAuth()
    const hasRememberAccount = localStorage.getItem('user');
    const data = useContext(AuthContext);
    const handleLogout = () => {
        auth.signOut();
    };
    return (<div className={sx('wrapper')} >
        <div className={sx('inner')}>
            <div className={sx('close')} onClick={onShow}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
            <div className={sx('content')}>
                <div className={sx('content-logo')}>
                    FakeShop
                </div>
                {hasRememberAccount ?
                    <div className={sx('content-login')} onClick={handleLogout}>
                        <img className={sx('avatar')} src={data.user.photoURL} alt="avatar" />
                    </div>
                    :
                    <Link onClick={onShow} to={'/login'} className={sx('content-login')}>Log in</Link>
                }

                <div ref={refInput} className={sx('content-search')}>
                    <SearchHeader />
                </div>
                <Link to={'/'} className={sx('content-home')} onClick={onShow}>
                    <FontAwesomeIcon icon={faHome} />
                    <span>Home</span>
                </Link>
                <Link to={'/cart'} className={sx('content-home')} onClick={onShow}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span>Cart</span>
                </Link>
            </div>
        </div>
        <div className={sx('wrapperfoole')} onClick={onShow}></div>
    </div >);
}

export default HeaderBar;