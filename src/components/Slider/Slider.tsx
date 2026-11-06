import type { PropsWithChildren } from 'react'
import { Children } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import styles from './Slider.module.scss'

type Props = PropsWithChildren<{
  slidesPerView?: number | 'auto'
  spaceBetween?: number
  slidesPerGroup?: number
  loop?: boolean
  centeredSlides?: boolean
}>

export default ({
  children,
  slidesPerView = 7,
  spaceBetween = 21,
  slidesPerGroup = 1,
  loop = true,
  centeredSlides = false,
}: Props) => {
  return (
    <Swiper
      className={styles.slider}
      wrapperClass={styles.wrapper}
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      slidesPerGroup={slidesPerGroup}
      loop={loop}
      centeredSlides={centeredSlides}
      breakpoints={{
        0: {
          slidesPerView: 2.5,
        },
        481: {
          slidesPerView: 3.5,
          centeredSlides: true,
        },
        1024: {
          slidesPerView: 5,
        },
        1440: {
          slidesPerView: 7,
        },
      }}
    >
      {Children.map(children, (child, index) => (
        <SwiperSlide className={styles.slide} key={index}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}