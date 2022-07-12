import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { signInWithPopup, FacebookAuthProvider, GoogleAuthProvider, getAdditionalUserInfo } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

import styles from './login.module.scss';
import { authentication, db } from '~/compoment/firebase/config';
const sx = classNames.bind(styles);
function Login() {
    const navigate = useNavigate();

    const singInWithFacebook = async () => {
        const provider = new FacebookAuthProvider();
        try {
            const data = await signInWithPopup(authentication, provider);
            const { isNewUser, providerId } = getAdditionalUserInfo(data);
            if (isNewUser) {
                addDoc(collection(db, 'users'), {
                    displayName: data.user.displayName,
                    email: data.user.email,
                    photoURL: data.user.photoURL,
                    uid: data.user.uid,
                    providerId: providerId,
                });
            }
            navigate('/');
        } catch (error) {
            console.log('errr', error);
        }
    };
    const singInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const data = await signInWithPopup(authentication, provider);
            const { isNewUser, providerId } = getAdditionalUserInfo(data);
            if (isNewUser) {
                addDoc(collection(db, 'users'), {
                    displayName: data.user.displayName,
                    email: data.user.email,
                    photoURL: data.user.photoURL,
                    uid: data.user.uid,
                    providerId: providerId,
                });
                
            }
            navigate('/');
        } catch (error) {
            console.log('errr', error);
        }
    };

    return (
        <div className={sx('wrapper')}>
            <div className={sx('inner')}>
                <Link to={'/'} className={sx('content')}>
                    FakeShop
                </Link>
                <span>Hãy đăng nhập để bắt đầu đặt hàng!</span>
                <h2>Đăng nhập</h2>
                <div onClick={singInWithGoogle} className={sx('login')}>
                    <button className={sx('login-btn')}>
                        <img
                            src="https://accounts.fullstack.edu.vn/assets/images/signin/google-18px.svg"
                            className={sx('img-title')}
                        />
                        <span>Đăng nhập bằng Google</span>
                    </button>
                </div>
                <div className={sx('login')}>
                    <button onClick={singInWithFacebook} className={sx('login-btn')}>
                        <img
                            src="https://accounts.fullstack.edu.vn/assets/images/signin/facebook-18px.svg"
                            className={sx('img-title')}
                        />
                        <span>Đăng nhập bằng Facebook</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
