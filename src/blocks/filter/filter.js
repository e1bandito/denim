import $ from 'jquery';
import {onPriceChange} from '../range/range';

const rangeSlider = document.querySelector('.range__slider');

$('.filter__placeholder').on('click', function () {
  $(this).next('.filter__wrap').slideToggle(200);
  $('body').toggleClass('body-lock');
  $(this).toggleClass('filter__placeholder--open');
});

$('.filter__btn--close').on('click', function () {
  $(this).parent().parent('.filter__wrap').slideToggle(200);
  $('body').toggleClass('body-lock');
  $(this).parent().parent().siblings('.filter__placeholder').removeClass('filter__placeholder--open');
});

$('.filter__item-text').on('click', function (e) {
  if (e.target.classList.contains('filter__item-text')) {
    $(this).next().slideToggle(200);
    $(this).toggleClass('filter__item-text--open');
  }
});

let filterArr = [];

let renderFilterValue = function () {
  let defaultStr = 'Filter by: ';
  let arrStr = filterArr.join(', ');
  let str = defaultStr + arrStr;
  $('.filter__placeholder').text(str);
};

const onColorChange = function () {
  filterArr.push('color');
  renderFilterValue();
  $('.checkbox--color .checkbox__input').off();
}

const onCollectionChange = function () {
  filterArr.push('collection');
  renderFilterValue();
  $('.checkbox--collection .checkbox__input').off();
}

$('.checkbox--color .checkbox__input').on('change', onColorChange);

$('.checkbox--collection .checkbox__input').on('change', onCollectionChange);

$('.filter__btn--clear').on('click', function () {
  $('.filter__placeholder').text('Filter by');
  filterArr = [];
  rangeSlider.noUiSlider.on('change', onPriceChange);
  $('.checkbox--color .checkbox__input').on('change', onColorChange);
  $('.checkbox--collection .checkbox__input').on('change', onCollectionChange);
});

export {filterArr, renderFilterValue};
