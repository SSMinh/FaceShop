import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const sx = classNames.bind(styles);
function Footer() {
    return (
        <div className={sx('wrapper')}>
            <div className={sx('container')}>
                <div className={sx('row')}>
                    <div className={sx('col-md-3 col-6')}>
                        <ul className={sx('customer-service')}>
                            <h2 className={sx('title-service')}>CUSTOMER SERVICE</h2>
                            <li className={sx('service')}>Help Centre</li>
                            <li className={sx('service')}>FakeShop Blog</li>
                            <li className={sx('service')}>FakeShop Mall</li>
                            <li className={sx('service')}>Payment</li>
                            <li className={sx('service')}>Shipping</li>
                            <li className={sx('service')}>Contact Us</li>
                        </ul>
                    </div>
                    <div className={sx('col-md-3 col-6')}>
                        <ul className={sx('customer-service')}>
                            <h2 className={sx('title-service')}>ABOUT FAKESHOP</h2>
                            <li className={sx('service')}>About Us</li>
                            <li className={sx('service')}>FakeShop Careers</li>
                            <li className={sx('service')}>FakeShop Policies</li>
                            <li className={sx('service')}>Privacy Policy</li>
                            <li className={sx('service')}>Flash Deals</li>
                            <li className={sx('service')}>Media Contact</li>
                        </ul>
                    </div>
                    <div className={sx('col-md-3 col-6')}>
                        <ul className={sx('customer-service')}>
                            <h2 className={sx('title-service')}>FOLLOW US</h2>
                            <li className={sx('service')}>
                                <a href="https://www.facebook.com/" className={sx('link-service')}>
                                    <FontAwesomeIcon icon={faFacebook} />
                                    <span>Facebook</span>
                                </a>
                            </li>
                            <li className={sx('service')}>
                                <a href="https://www.instagram.com/" className={sx('link-service')}>
                                    <FontAwesomeIcon icon={faInstagram} />
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li className={sx('service')}>
                                <a href="https://www.linkedin.com/" className={sx('link-service')}>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                    <span>Linkedin</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={sx('col-md-3 col-6')}>
                        <h2 className={sx('title-service')}>SHOPEE APP DOWNLOAD</h2>
                        <div className={sx('infoApp')}>
                            <img
                                className={sx('infoAppQr')}
                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/d91264e165ed6facc6178994d5afae79.png"
                            />
                            <div className={sx('infoAppDownload')}>
                                <img
                                    className={sx('infoAppDownload-item')}
                                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png"
                                />
                                <img
                                    className={sx('infoAppDownload-item')}
                                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png"
                                />
                                <img
                                    className={sx('infoAppDownload-item')}
                                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1ae215920a31f2fc75b00d4ee9ae8551.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
