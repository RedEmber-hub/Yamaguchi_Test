import React from 'react';
import './FirstSlide.scss';
import { Slide } from '../Slide';
import { Badge } from '../Badge';

export default function FirstSlide() {
  return (
    <Slide>
      <div className="firstSlide">
        <div className="firstSlide__header">
          <span>
            ФЕН и СТАЙЛЕР
            <br />в уникальном дизайне
          </span>
        </div>

        <div className="firstSlide__content">
          <div className="firstSlide__badge-img">
            <div className="firstSlide__badge">
              <Badge color="primary" text="Фен" />
            </div>

            <div className="firstSlide__img">
              <img src="/img/slide1-leftimg.png" alt="Фен" />
            </div>
          </div>

          <div className="firstSlide__badge-img">
            <div className="firstSlide__badge">
              <Badge color="secondary" text="2 в 1" />
            </div>

            <div className="firstSlide__img">
              <img src="/img/slide1-hair.png" alt="2 в 1" />
            </div>
          </div>

          <div className="firstSlide__badge-img">
            <div className="firstSlide__badge">
              <Badge color="secondary" text="Стайлер" />
            </div>

            <div className="firstSlide__img">
              <img src="/img/slide1-rightimg.png" alt="Стайлер" />
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
