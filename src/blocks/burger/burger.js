import $ from 'jquery';

$('.burger').on('click', function () {
  $(this).toggleClass('burger--open');
  $('.nav').toggleClass('nav--open');
});
