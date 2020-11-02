import $ from 'jquery';
import slick from 'slick-carousel';

$('.product__slider-list').slick({
  infinite: true,
  prevArrow: '.product__btn--prev',
  nextArrow: '.product__btn--next',
  dots: true,
  dotsClass: 'product__dots',
  customPaging: function (slider, i) {
    let src = slider.$slides[i].children[0].children[0].children[0].children[2].currentSrc;
    return '<span class="product__dot"> <img src="' + src + '" alt=""> </span>';
  },
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: true,
        dots: false
      }
    }
  ]
});
