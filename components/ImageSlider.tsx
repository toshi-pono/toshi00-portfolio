'use client'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Image from 'next/image'

import { toImagePath, WorkImage } from 'data/works'

import styles from './ImageSlider.module.scss'
import '@splidejs/react-splide/css'

interface Props {
  images: WorkImage[]
}

const ImageSlider = ({ images }: Props) => {
  return (
    <Splide aria-label="Image Slider" className={styles.wrap}>
      {images.map((image) => (
        <SplideSlide key={image.path}>
          <Image
            src={toImagePath(image.path)}
            alt={image.alt}
            width={1024}
            height={768}
            className={styles.slideImage}
          />
        </SplideSlide>
      ))}
    </Splide>
  )
}

export default ImageSlider
