
import classNames from "classnames/bind";
import styles from './swiper.module.scss';
import Skeleton from 'react-loading-skeleton';
const sx=classNames.bind(styles)

function LoadingSliders() {
    return (  
        <div className={sx('wrapper')}>
      <div className={sx('full-banner')}>
         <div className={sx('left-banner')}>
        <Skeleton width={800} height={250}/>
        </div>
        <div className={sx('right-banner')}>
            <Skeleton className={sx('bannerHome')}>
            </Skeleton>
            <Skeleton className={sx('bannerHome')}>
            </Skeleton>
           </div>
      </div>
        </div>
       
    );
}

  export default LoadingSliders;