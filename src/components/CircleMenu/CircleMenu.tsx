import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation, EffectFade } from 'swiper/modules';
import { useState } from 'react';

// Импортируем как строки (пути к файлам)
import DryerIcon from '/icon/fen.svg';
import TwoInOneIcon from '/icon/list.svg';
import StylerIcon from '/icon/motor.svg';

// Импортируем компоненты слайдов
import FirstSlide from '@/components/FirstSlide/FirstSlide';
import SecondSlide from '@/components/SecondSlide/SecondSlide';
import ThirdSlide from '@/components/ThirdSlide/ThirdSlide';

import 'swiper/css';
import 'swiper/css/effect-fade';
import './CircleMenu.scss';

const slides = [
  {
    id: 1,
    title: 'Фен',
    image: '/img/slide3.jpg',
    description: 'Мощная сушка',
    icon: DryerIcon,
    text: 'фен-стайлер 2 в 1',
    component: FirstSlide,
  },
  {
    id: 2,
    title: '2 в 1',
    image: '/img/slide3.jpg',
    description: 'Идеальная укладка',
    icon: TwoInOneIcon,
    isCenter: true,
    text: 'фен-стайлер 2 в 1',
    component: SecondSlide,
  },
  {
    id: 3,
    title: 'Стайлер',
    image: '/img/slide3.jpg',
    description: 'Безупречные локоны',
    icon: StylerIcon,
    text: 'фен-стайлер 2 в 1',
    component: ThirdSlide,
  },
];

export default function ProductSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const TOTAL_SLOTS = 18;
  const step = 360 / TOTAL_SLOTS;
  const RADIUS = 353;

  const buttonAngles = [-step, 0, step];

  const getVisibleSlides = () => {
    const prev = (activeIndex - 1 + slides.length) % slides.length;
    const curr = activeIndex;
    const next = (activeIndex + 1) % slides.length;
    return [prev, curr, next];
  };

  const visibleSlides = getVisibleSlides();

  const handleSlideClick = (index: number) => {
    swiperInstance?.slideTo(index);
  };

  return (
    <div className="product-slider-container">
      <div className="navigation-wrapper">
        <div className="custom-navigation" style={{ '--radius': `${RADIUS}px` } as React.CSSProperties}>
          {visibleSlides.map((slideIndex, btnIndex) => {
            const slide = slides[slideIndex];
            const isActive = btnIndex === 1;

            return (
              <>
                <button
                  key={`${slide.id}-${btnIndex}`}
                  className={`nav-dot ${isActive ? 'active' : ''}`}
                  onClick={() => handleSlideClick(slideIndex)}
                  title={slide.title}
                  style={{ '--angle': `${buttonAngles[btnIndex]}deg` } as React.CSSProperties}
                >
                  <img src={slide.icon} alt={slide.title} className={`dot-icon ${isActive ? 'active' : ''}`} />
                </button>

                <div className="slide-text">
                  <p className="text-label">{slide.text}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="slider-wrapper">
        <Swiper
          modules={[Mousewheel, Navigation, EffectFade]}
          mousewheel={{ enabled: true, sensitivity: 1 }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={600}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          className="swiper"
        >
          {slides.map((slide) => {
            const SlideComponent = slide.component;

            return (
              <SwiperSlide key={slide.id}>
                <div className={`slide-content ${slide.isCenter ? 'center-slide' : ''}`}>
                  {SlideComponent ? (
                    <SlideComponent />
                  ) : (
                    <img src={slide.image} alt={slide.description} className="main-image" />
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
