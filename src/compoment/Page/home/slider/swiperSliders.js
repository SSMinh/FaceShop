import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames/bind';
import styles from './swiper.module.scss';
const sx = classNames.bind(styles);

function SwiperSliders() {
    const assetsBanner = [
        {
            img: '//theme.hstatic.net/1000326314/1000865891/14/support_1_ic.png?v=133',
            imgAlt: 'FreeShip',
            title: 'Miễn phí vận chuyển',
            moreTitle: 'cho đơn hàng trên 500k',
        },
        {
            img: '//theme.hstatic.net/1000326314/1000865891/14/support_2_ic.png?v=133',
            imgAlt: 'Trải nghiệm mua sắm hoàn toàn hài lòng',
            title: 'Trải nghiệm mua sắm hoàn toàn hài lòng',
            moreTitle: 'lên đến 90 ngày đổi trả',
        },
        {
            img: '//theme.hstatic.net/1000326314/1000865891/14/support_4_ic.png?v=133',
            imgAlt: 'Dịch vụ tận tâm chu đáo',
            title: 'Dịch vụ tận tâm chu đáo',
            moreTitle: 'Hỗ trợ tư vấn 8h-22h hàng ngày',
        },
    ];
    const renderTitle = () => {
        return assetsBanner.map((item, index) => (
            <div key={index} className={sx('bannerAssets d-sm-flex flex-sm-column align-items-sm-center  d-md-flex flex-md-row ')}>
                <img className={sx('bannerAssets-img')} src={item.img} alt={item.imgAlt} />
                <div className={sx('bannerAssets-content')}>
                    <span className={sx('bannerAssets-contentTitle')}>{item.title}</span>
                    <p>{item.moreTitle}</p>
                </div>
            </div>
        ));
    };
    return (
        <div className={sx('wrapper container my-4')}>
            <div className={sx('full-banner row ')}>
                <div className={sx('left-banner d-none  d-md-block col-md-12 col-lg-8 ')}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        navigation
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => ''}
                        onSlideChange={() => ''}
                    >
                        <SwiperSlide>
                            <div className={sx('swiper-slide swiper-slide-active')}>
                                <div className={sx('banner1')} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={sx('banner2')} />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className={sx('right-banner col-12 col-lg-4')}>
                    <div className={sx('bannerHome d-none d-sm-flex flex-sm-row d-md-flex flex-md-column h-100')}>
                        {renderTitle()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SwiperSliders;
