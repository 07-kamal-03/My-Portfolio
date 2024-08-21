import image_1 from '../assets/img1.jpg'
import image_2 from '../assets/img2.jpg'
import image_3 from '../assets/img3.jpg'
import image_4 from '../assets/img4.jpg'
import image_5 from '../assets/img5.jpg'
import image_6 from '../assets/img6.jpg'
import image_7 from '../assets/img7.jpg'
import image_8 from '../assets/img8.jpg'
import image_9 from '../assets/img9.jpg'
import image_10 from '../assets/img10.jpg'
import '../css/General.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

export const General = () => {
  return (
    <div className='general-container'>
      <div className='media'>
        <Swiper
          modules={[EffectCoverflow, Navigation, Pagination]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          navigation={{ nextEl: '.arrow-forward', prevEl: '.arrow-back', clickable: true }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          className='mySwiper'
        >
          <SwiperSlide>
            <img src={image_1} alt='Image 1' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image_2} alt='Image 2' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image_3} alt='Image 3' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image_4} alt='Image 4' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image_5} alt='Image 5' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image_6} alt='Image 6' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image_7} alt='Image 7' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image_8} alt='Image 8' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image_9} alt='Image 9' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image_10} alt='Image 10' />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='swiper-pagination' id='slide-bullet'></div>
      <div className='slider-controller'>
        <div className='arrow-back arrow'>
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className='arrow-forward arrow'>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
      </div>
    </div>
  )
}
