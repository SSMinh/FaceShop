import styles from './cart.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { buyAction, deleteAction, reducedAction } from '~/compoment/redux/actions';
const sx = classNames.bind(styles);
function Item({ data }) {
    const dispatch = useDispatch();
    const hanldeIncrease = (value) => {
        if (value.completed !== true) {
            dispatch(buyAction(value));
        }
    };
    const hanldeReduced = (value) => {
        if (value.completed !== true) {
            dispatch(reducedAction(value));
        }
    };
    const hanldeDelete = (value) => {
        dispatch(deleteAction(value));
    };
    return (
        <div className={sx('item')}>
            <div style={data.completed ? { marginLeft: '60px' } : null} className={sx('inner')}>
                <img className={sx('productItem')} src={data.image} />
                <div className={sx('profile')}>
                    <span className={sx('productName')}>{data.title}</span>
                    <span className={sx('productTitle')}>{data.description}</span>
                </div>
            </div>
            <div className={sx('productPrice')}>${data.total.toFixed(2)}</div>
            <div className={sx('productQuantity')}>
                <button onClick={() => hanldeReduced(data)} className={sx('productReduced')}>
                    -
                </button>
                <div className={sx('productAmount')}>{data.qyt}</div>
                <button onClick={() => hanldeIncrease(data)} className={sx('productIncrease')}>
                    +
                </button>
            </div>
            <div className={sx('productCheck')}>{data.completed && <FontAwesomeIcon icon={faCircleCheck} />}</div>
            <button onClick={() => hanldeDelete(data)} className={sx('productDelete')}>
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        </div>
    );
}

export default Item;
