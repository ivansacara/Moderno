// const { on } = require('gulp');

$(function () {

	$(".rate-star").rateYo({
		rating: 5,
		readOnly: true,
		starWidth: "12px"
	});

	$('.product-slider-inner').slick({
		dots: true,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 4


	});

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 1000,
		from: 0,
		to: 600,
		prefix: "$"
	});

	$('.icon-th-list').on('click', function () {
		$('.page').addClass('list');
		$('.icon-th-list').addClass('active');
		$('.icon-th-large').removeClass('active');
	});
	$('.icon-th-large').on('click', function () {
		$('.page').removeClass('list');
		$('.icon-th-large').addClass('active');
		$('.icon-th-list').removeClass('active');
	});


	$('.menu_btn').on('click', function () {
		$('.menu_list').slideToggle()
	});

	$('.header_btn-menu').on('click', function () {
		$('.header_box').toggleClass('active')
	});


	var mixer = mixitup('.products__inner-box');


});