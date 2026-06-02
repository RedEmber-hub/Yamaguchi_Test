import React from 'react';
import './SecondSlide.scss';
import { Slide } from '../Slide';
import { Badge } from '../Badge';

export default function SecondSlide() {
  return (
    <Slide>
      <div className="secondSlide">
        <div className="secondSlide__image-background">
          <img src="/img/slide2-girl.png" alt="Background" />
        </div>

        <div className="secondSlide__sticker">
          <div className="secondSlide__sticker-icon">
            <img src="/icon/star.svg" />
          </div>

          <div className="secondSlide__sticker-text">
            <p>
              Не тяжелее
              <br />
              чашки кофе
            </p>
          </div>
        </div>

        <div className="secondSlide__info">
          <div className="secondSlide__text-block">
            <div className="secondSlide__title">
              <h1>
                СУПЕР-
                <br />
                ЛЁГКИЙ
              </h1>
            </div>
            <div className="secondSlide__subtitle">
              <p>
                Уменьшает усталость рук при сушке волос, делая процедуру удобной и приятной даже после напряжённого
                рабочего дня.
              </p>
            </div>
          </div>

          <div className="secondSlide__badge">
            <Badge color="secondary" text="500 г" />
          </div>
        </div>
      </div>
    </Slide>
  );
}
