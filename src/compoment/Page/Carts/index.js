import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SyncLoader from 'react-spinners/SyncLoader';
import { getAuth } from 'firebase/auth';

import WrapperLoading from '~/compoment/Loading/Loading';
import { listCarts, listBought } from '~/compoment/redux/selector';
import Empty from '~/compoment/Popper/PopperEmpty/Empty';
import { checkedAction } from '~/compoment/redux/actions';
import OfterProduct from './ofter/ofterProduct';
import Item from './Item';
import styles from './cart.module.scss';

const sx = classNames.bind(styles);
function Cart() {
    const auth = getAuth();
    const [checkeds, setCheckeds] = useState([]);
    const [show, setShow] = useState(false);
    const [checkAll, setCheckAll] = useState(false);
    const [loadingCheck, setLoadingCheck] = useState(true);
    const itemProduct = useSelector(listCarts);
    const itemChecked = useSelector(listBought);
    const dispatch = useDispatch();
    let lenghtProduct = itemProduct.length > 0;
    useEffect(() => {
        setShow(lenghtProduct);
    }, [lenghtProduct]);
    useEffect(() => {
        const loading = setTimeout(() => {
            setLoadingCheck(false);
        }, 1000);
        return () => clearTimeout(loading);
    }, [loadingCheck]);
    const totals = itemProduct.reduce((cou, res) => {
        return cou + res.total;
    }, 0);
    const item = itemProduct.reduce((cou, res) => {
        return cou + res.qyt;
    }, 0);
    const handleCheckAll = () => {
        const arr = [];
        setCheckAll((prev) => !prev);
        itemProduct.map((item) => {
            if (!item.completed) {
                arr.push(item.id);
            }
        });
        if (checkAll) {
            setCheckeds((prev) => []);
        } else {
            setCheckeds((prev) => [...arr]);
        }
    };

    const handleCheck = (id) => {
        setCheckeds((prev) => {
            const isCheck = checkeds.includes(id);
            if (isCheck) {
                return checkeds.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    const renderCheck = () => {
        return itemChecked.map((item, index) => (
            <div key={index} className={sx('wrapperItem')}>
                <Item data={item} />
            </div>
        ));
    };
    const renderItem = () => {
        return itemProduct.map(
            (item, index) =>
                item.completed !== true && (
                    <div key={index} className={sx('wrapperItem')}>
                        <input
                            className={sx('checkItem')}
                            checked={checkeds.includes(item.id)}
                            onChange={() => handleCheck(item.id)}
                            type="checkbox"
                        />
                        <Item data={item} />
                    </div>
                ),
        );
    };

    const user = auth.currentUser;
    const handleCheckOut = () => {
        if (checkeds.length > 0 && user) {
            dispatch(checkedAction(checkeds));
            setCheckeds([]);
            setLoadingCheck(true);
        }
    };

    return (
        <div className={sx('wrapper')} style={show ? null : { textAlign: 'center' }}>
            {show ? renderItem() : <Empty />}
            {show ? (
                ''
            ) : (
                <Link to="/" className={sx('linkShop')}>
                    Go Shopping Now
                </Link>
            )}
            <div className={sx('boughtCheck')}></div>
            {itemChecked.length > 0 && <div className={sx('boughtCheck-titte')}>Đã mua</div>}
            {renderCheck()}
            <div className={sx('footer')}>
                <input
                    className={sx('checkItem')}
                    checked={checkeds.length > 0 && itemProduct.length === checkeds.length}
                    onChange={handleCheckAll}
                    type="checkbox"
                />
                <div className={sx('footerCheck')}>
                    <div className={sx('footerTotal')}>
                        Total ({item} item): ${totals.toFixed(2)}
                    </div>

                   {user? (<button to="/login" onClick={handleCheckOut} className={sx('footer-btn')}>
                        Check Out
                    </button>):
                    (
                        <Link to="/login" className={sx('footer-btn')}>
                        Check Out
                    </Link>
                    )}
                </div>
            </div>
            <div className={sx('boughtCheck-titte')}>YOU MAY ALSO LIKE</div>
            <OfterProduct />
            {loadingCheck && (
                <WrapperLoading>
                    <SyncLoader color={'#F37A24'} size={10} />
                </WrapperLoading>
            )}
        </div>
    );
}
export default Cart;
