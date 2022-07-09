import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import PopperHeader from '~/compoment/Popper/PopperHeader/PopperHeader';
import styles from './Header.module.scss';
import SearchHeader from '~/compoment/component/SearchHeader/SearchHeader';
const sx = classNames.bind(styles);
function Header() {
    return (
        <div className={sx('wrapper')}>
            <div className={sx('inner')}>
                <Link to={'/'} className={sx('header-titte')}>
                    FakeShop
                </Link>
                <SearchHeader />
                <PopperHeader />
            </div>
        </div>
    );
}
export default Header;
