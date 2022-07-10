import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './login.module.scss';
import { signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { authentication } from '~/compoment/firebase/config';
const sx = classNames.bind(styles);
function Login() {
    const singInWithFacebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(authentication, provider)
            .then((re) => {
                console.log(re);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    const singInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
            .then((re) => {
                console.log(re);
            })
            .catch((err) => {
                console.log(err.message);
            });
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
