import noUislider from 'nouislider';
import wNumb from 'wnumb';
import {filterArr, renderFilterValue} from '../filter/filter';

const rangeSlider = document.querySelector('.range__slider');

const onPriceChange = function () {
  filterArr.push('price');
  renderFilterValue();
  rangeSlider.noUiSlider.off();
}

if (rangeSlider) {
  noUislider.create(rangeSlider, {
    start: [40, 240],
    connect: true,
    tooltips: true,
    range: {
      'min': 0,
      'max': 300
    },
    format: wNumb({
      decimals: 0,
      prefix: '$ '
    })
  });

  rangeSlider.noUiSlider.on('change', onPriceChange);
}

export {onPriceChange};
