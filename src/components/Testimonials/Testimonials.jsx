import React from 'react'
import style from './Testimonials.module.css'
import Hero from '../../assets/testimonialHero.png'
import { TestimonialsData } from '../../data/testimonials'
import { Swiper, SwiperSlide } from 'swiper/react'

const Testimonials = () => {
  return (
    <div className={style.testimonials}>
        <div className={style.wrapper}>
            <div className={style.container}>
                <span>Top Rated</span>
                <span>Seedliy say has suitable disposal and boy. Exercise joy man children</span>
            </div>
        
            <img src={Hero} alt="" />

            <div className={style.container}>
                <span>100K</span>
                <span>Happy Customers with us</span>
            </div>
        </div>

        <div className={style.reviews}>Reviews</div>

        <div className={style.carousel}>
            <Swiper
                slidesPerView={3}
                slidesPerGroup={1}
                spaceBetween={20}
                className={style.tcarousel}
            >
                {
                    TestimonialsData.map((testimonial, index) => (
                        <SwiperSlide>
                            <div className={style.testimonial}>
                                <img src={testimonial.image} alt="" />
                                <span>{testimonial.comment}</span>
                                <hr />
                                <span>{testimonial.name}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonials
