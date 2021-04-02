class Slider{
  constructor(setting) {
    if(setting === undefined) {
      setting = {
        wrapper: '.slider__wrapper',
        slide: '.slide',
        btnNext: '.slide__btn-next',
        btnPrev: '.slide__btn-prev',
        infinite: false,
        disableBtnClass: 'slide__btn--disabled',
      };
    }

    this.wrap = $(setting.wrapper).addClass('slider__wrapper');
    this.slide = $(setting.slide).addClass('slide');
    this.slideBtnNext = $(setting.btnNext).addClass('slide__btn-next');
    this.slideBtnPrev = $(setting.btnPrev).addClass('slide__btn-prev');
    this.disableBtnClass = setting.disableBtnClass;
    this.infinite = setting.infinite;

    if(!this.infinite) {
      this.slide.each((index, item) => {
        const target = $(item);
        if (index === 0) {
          target.find(this.slideBtnPrev).addClass(this.disableBtnClass + ` ` + ` ` + 'slide__btn--disabled')
        }
        if (index === this.slide.length - 1) {
          target.find(this.slideBtnNext).addClass(this.disableBtnClass + ` ` + ` ` + 'slide__btn--disabled')
        }
      });
    }

    this.init(this.wrap, this.slide);
  }

  init(wrap, slide){
    this.slideBtnNext.on('click', function () {
      wrap.children(slide).first().fadeOut(200, () => {
        wrap.children(slide).first().appendTo(wrap).hide();
      }).fadeIn(200, 'swing');
    });

    this.slideBtnPrev.on('click', function() {
      wrap.children(slide).last().fadeOut(100, () => {
        wrap.children(slide).last().prependTo(wrap).hide();
      }).fadeIn(200);
    });
  }

  destroySlider(){
    this.slideBtnNext.off().removeClass('slide__btn-next');
    this.slideBtnPrev.off().removeClass('slide__btn-prev');
    this.wrap.removeClass('slider__wrapper');
    this.slide.removeClass('slide');

  }
}

export default Slider;

// init(wrap, slide){
//   this.slideBtnNext.off().on('click', function () {
//     wrap.children(slide).first().fadeOut(50,() => {
//       wrap.children(slide).first().appendTo(wrap).removeClass('transformPrev').addClass('transformThis').hide();
//     }).fadeIn(400);
//   });
//
//   this.slideBtnPrev.off().on('click', function() {
//     wrap.children(slide).last().fadeOut(100, () => {
//       wrap.children(slide).last().prependTo(wrap).removeClass('transformThis').addClass('transformPrev').hide();
//     }).fadeIn(200);
//   });
// }
