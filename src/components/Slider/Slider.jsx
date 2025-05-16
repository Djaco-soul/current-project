import 'swiper/css';
import './Slider.scss';
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import classNames from "classnames";

const defaultSliderParams = {
  // От 0 и до следующего брекпоинта
  slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 20,
  allowTouchMove: true,

  // Следующий брекпоинт
  breakpoints: {
    481: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
      allowTouchMove: true,
    },
    1024: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 20,
      allowTouchMove: false,
    },
    1441: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 30,
      allowTouchMove: false,
    },
  }
}

const Slider = (props) => {
  const {
          children,
          navigationTargetElementId = null,
          sliderParams              = defaultSliderParams,
          isBeyondTheVieportOnMobileS,
          hasScrollbar = true,
        } = props;

  return (
    <div
      className={classNames('slider', {
        'slider--beyond-the-vieport-on-mobile-s': isBeyondTheVieportOnMobileS,
      })}
      data-js-slider={JSON.stringify({
        sliderParams,
        navigationTargetElementId,
      })}
    >
      <div
        className="slider__swiper swiper"
        data-js-slider-swiper=''
      >
        <ul className="slider__list swiper-wrapper">
          {children.map((
            slide, index
          ) => (
            <li className='slider__item swiper-slide'>
              {slide}
            </li>
          ))}
        </ul>
      </div>

      {!navigationTargetElementId && (
        <SliderNavigation
          className='slider__navigation'
        />
      )}

      {hasScrollbar && (
        <div
          className='slider__scrollbar visible-mobile'
          data-js-slider-scrollbar=''
        />
      )}
    </div>
  )
}

export default Slider;