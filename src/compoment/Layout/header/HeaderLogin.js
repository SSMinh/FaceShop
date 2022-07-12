import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './Header.module.scss';
import { getAuth } from 'firebase/auth';
import { AuthContext } from '~/compoment/component/authProvider/AuthProvide';
import { useContext } from 'react';

const sx = classNames.bind(styles);
function LoginAvatar() {
    const data = useContext(AuthContext);
    const auth = getAuth();
    const handleLogout = () => {
        auth.signOut();
        window.location.reload();
    };
    return (
        <Tippy
            placement={'bottom-end'}
            interactive
            delay={[0, 500]}
            render={(attrs) => (
                <div className={sx('logout')} tabIndex="-1" {...attrs}>
                    <button onClick={handleLogout} className="logout-account">
                        Log out
                    </button>
                </div>
            )}
        >
            <div className={sx('wrapperAvatar')}>
                <img className={sx('avatar')} src={data.user.photoURL} alt="avatar" />
                <span>{data.user.displayName}</span>
            </div>
        </Tippy>
    );
}

export default LoginAvatar;
