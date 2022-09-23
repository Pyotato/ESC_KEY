import ProductItem from "../productItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import 'swiper/css';
import './style/swiper.css'
import "swiper/css/pagination";

const CustomProductSwiper = (props) => {
    const data = props.data;
    let ProductTitle='SHARK G148'
    let ProductDescription='GAMING KEYBOARD ( 게이밍 / 사무 )'
    let ProductThumnail='/img/keyboard/shark.png';

    let swiperData = data.map((el) => (
        <SwiperSlide key={el.id}>
            <ProductItem key={el.id} title={el.name} description={el.company} thumnail={el.img}/>
        </SwiperSlide>
    ));

    SwiperCore.use([Pagination, Autoplay]);
    return (
        <>
            <Swiper 
                className="mySwiper" 
                slidesPerView={3} 
                loop={true}
                navigation={true} 
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false  }}
                >
                <span>{swiperData}</span> 
                
                </Swiper>
        </>
    )
}

export default CustomProductSwiper;