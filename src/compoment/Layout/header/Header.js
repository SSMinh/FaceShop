import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import SearchHeader from '~/compoment/component/SearchHeader/SearchHeader';
import LoginAvatar from './HeaderLogin';
import PopperHeader from '~/compoment/Popper/PopperHeader/PopperHeader';
const sx = classNames.bind(styles);
function Header() {
    const hasRememberAccount = localStorage.getItem('user');
    return (
        <div className={sx('wrapper')}>
            <div className={sx('inner')}>
                <Link to={'/'} className={sx('header-titte')}>
                    FakeShop
                </Link>
                <SearchHeader />
                <div className={sx('header-right')}>
                    <div className={sx('header-login')}>
                        {hasRememberAccount ? (
                            <LoginAvatar />
                        ) : (
                            <Link to={'/login'} className={sx('header-login_btn')}>
                                Log in
                            </Link>
                        )}
                    </div>
                    <PopperHeader />
                </div>
            </div>
        </div>
    );
}
export default Header;
