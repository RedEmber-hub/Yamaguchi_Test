import React from 'react';
import './ThirdSlide.scss';
import { Slide } from '../Slide';

export default function ThirdSlide() {
  return (
    <Slide>
      <div className="thirdSlide">
        <div className="thirdSlide__image-background">
          <img src="/img/slide3.jpg" />
        </div>

        <div className="thirdSlide__text-block">
          <div className="thirdSlide__title">
            <h1>
              Для ценителей комфорта
              <br /> и качества в уходе за волосами
            </h1>
          </div>

          <div className="thirdSlide__subtitle">
            <p>Бесщеточный мотор BLDC</p>
          </div>
        </div>

        <div className="thirdSlide__sticker">
          <div className="thirdSlide__sticker-icon">
            <img src="/icon/star.svg" />
          </div>

          <div className="thirdSlide__sticker-text">
            <p>
              Салонная <br />
              мощность
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
