import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './Header.module.scss';
import { getAuth } from 'firebase/auth';

const sx = classNames.bind(styles);
function LoginAvatar() {
    const auth = getAuth();
    return (
        <Tippy
            placement={'bottom-start'}
            visible
            interactive
            delay={[0, 500]}
            render={(attrs) => (
                <div className={sx('logout')} tabIndex="-1" {...attrs}>
                    <button onClick={() => auth.signOut()} className="logout-account">
                        Logout
                    </button>
                </div>
            )}
        >
            <div className={sx('wrapperAvatar')}>
                <img
                    className={sx('avatar')}
                    src="https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn"
                    alt="avatar"
                />
                <span>className</span>
            </div>
        </Tippy>
    );
}

export default LoginAvatar;
