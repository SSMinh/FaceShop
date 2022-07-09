import classNames from "classnames/bind";
import styles from './PopperEmpty.module.scss'
const sx=classNames.bind(styles)

function Empty() {
    return ( 
        <>
         <div className={sx('popperEmpty')}></div>
        <div className={sx('popperEmptyTitle')}>Your shopping cart is empty</div>
        </>
     );
}

export default Empty;