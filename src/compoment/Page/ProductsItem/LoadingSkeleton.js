import styles from './productItem.module.scss'
import classNames from "classnames/bind";
import  Skeleton  from 'react-loading-skeleton';
const sx=classNames.bind(styles)
function LoadingProducts() {
    return ( 
      <div className={sx("wrapper container")}>
      <div className={sx('row')}>
      <div className={sx('col-md-6')}>
      <Skeleton 
      width={'100%'}
      height={500}
      />
      </div>
      <div className={sx('col-md-6 d-flex align-items-center')}>
      <div 
      className={sx('informItem')}
      >
          <div className={sx('informTitle')}>
        <Skeleton width={'100%'}  height={30}  className={sx('abcItem')}></Skeleton>
        <Skeleton width={'100%'}  height={30} className={sx('nameItem')}></Skeleton>
        {/* <h3 className={sx('ratingItem')}>{product.rating.rate}</h3> */}
        <Skeleton width={'100%'} height={30}  className={sx('sellItem')}></Skeleton>
        <Skeleton height={200} width={'100%'} className={sx('descriptionItem')} />
        </div>
        <div className={sx('buttonCart')}>
          <Skeleton width={200} height={44}  />
          <Skeleton width={200}  height={44} />
        </div>
      </div>
      </div>
      </div>
    </div>
     );
}

export default LoadingProducts;