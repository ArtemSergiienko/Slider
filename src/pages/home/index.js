import './index.sass';
import './index.pug';
import Slider from './slider'

export default () => {
  const slider = new Slider({
    wrapper: '.pluses-wrapper',
    slide: '.pluses-slide',
    btnNext: '.pluses-btn--next',
    btnPrev: '.pluses-btn--prev',
    infinite: false,
    disableBtnClass: 'pluses-btn--disabled',
  });
}
