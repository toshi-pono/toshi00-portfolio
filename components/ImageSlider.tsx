'use client'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Image from 'next/image'

import { toImagePath, WorkImage } from 'data/works'

import styles from './ImageSlider.module.scss'
import '@splidejs/react-splide/css'

interface Props {
  images: WorkImage[]
  color?: string
}

const ImageSlider = ({ color, images }: Props) => {
  return (
    <div style={{ backgroundColor: color ?? '#cad1db' }}>
      <Splide aria-label="Image Slider" className={styles.wrap}>
        {images.map((image, i) => (
          <SplideSlide key={image.path}>
            <Image
              src={toImagePath(image.path)}
              alt={image.alt}
              width={700}
              height={393}
              className={styles.slideImage}
              priority={i === 0}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default ImageSlider
