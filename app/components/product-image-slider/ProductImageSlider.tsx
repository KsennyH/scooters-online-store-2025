'use client';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import { ProductImageSliderProps } from './ProductImageSliderProps';
import Image from 'next/image';
import styles from "./ProductImageSlider.module.css";

export const ProductImageSlider = ({ images }: ProductImageSliderProps) => {
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
    });

    const [currentSlide, setCurrentSlide] = useState(0);

    return (
    <div>
      <div ref={sliderRef} className="keen-slider">
        {images.map((src, idx) => (
          <div key={idx} className="keen-slider__slide">
            <Image
              src={src}
              alt={`product image ${idx}`}
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>

      <div className={styles.sliderImages}>
        {images.map((src, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`${
              idx === currentSlide ? styles.sliderBorder : ''
            }`}
          >
            <Image
              src={src}
              alt={`thumb ${idx}`}
              width={64}
              height={64}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

