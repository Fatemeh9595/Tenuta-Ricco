import "./MySwiper.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import About1 from "../../assets/img/about/1.jpg"
import About2 from "../../assets/img/about/2.jpg"
import About3 from "../../assets/img/about/3.jpg"
import About4 from "../../assets/img/about/4.jpg"
import About5 from "../../assets/img/about/5.jpg"
import About6 from "../../assets/img/about/6.jpg"
import About7 from "../../assets/img/about/7.jpg"
import About8 from "../../assets/img/about/8.jpg"
import About9 from "../../assets/img/about/9.jpg"
import About10 from "../../assets/img/about/10.jpg"
import About11 from "../../assets/img/about/11.jpg"
import About12 from "../../assets/img/about/12.jpg"
import About13 from "../../assets/img/about/13.jpg"
import About14 from "../../assets/img/about/14.jpg"
import About15 from "../../assets/img/about/15.jpg"
import About16 from "../../assets/img/about/16.jpg"
import About17 from "../../assets/img/about/17.jpg"
import About18 from "../../assets/img/about/18.jpg"
import About19 from "../../assets/img/about/19.jpg"
import About20 from "../../assets/img/about/20.jpg"
import About21 from "../../assets/img/about/21.jpg"
import About22 from "../../assets/img/about/22.jpg"


function MySwiper(){
    return(
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
             <SwiperSlide><img src={About1} alt="" /></SwiperSlide>
             <SwiperSlide><img src={About2} alt="" /></SwiperSlide>
             <SwiperSlide><img src={About3} alt="" /></SwiperSlide>
             <SwiperSlide><img src={About4} alt="" /></SwiperSlide>
             <SwiperSlide><img src={About5} alt="" /></SwiperSlide>
             <SwiperSlide><img src={About6} alt="" /></SwiperSlide>
             <SwiperSlide><img src={About7} alt="" /></SwiperSlide>
             <SwiperSlide><img src={About8} alt="" /></SwiperSlide>
             <SwiperSlide><img src={About9} alt="" /></SwiperSlide>
             <SwiperSlide><img src={About10} alt="" /></SwiperSlide>
             <SwiperSlide><img src={About11} alt="" /></SwiperSlide>
             <SwiperSlide><img src={About12} alt="" /></SwiperSlide>
             <SwiperSlide><img src={About13} alt="" /></SwiperSlide>
             <SwiperSlide><img src={About14} alt="" /></SwiperSlide>
             <SwiperSlide><img src={About15} alt="" /></SwiperSlide>
             <SwiperSlide><img src={About16} alt="" /></SwiperSlide>
             <SwiperSlide><img src={About17} alt="" /></SwiperSlide>
             <SwiperSlide><img src={About18} alt="" /></SwiperSlide>
             <SwiperSlide><img src={About19} alt="" /></SwiperSlide>
             <SwiperSlide><img src={About20} alt="" /></SwiperSlide>
             <SwiperSlide><img src={About21} alt="" /></SwiperSlide>
             <SwiperSlide><img src={About22} alt="" /></SwiperSlide>
          </Swiper>
        </>
    )
}


export default MySwiper