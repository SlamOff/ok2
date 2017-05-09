$(document).ready(function() {
	// remove placeholder after click
	$(document).ready(function () {
		$('input, textarea').focus(function(){
			$(this).data('placeholder',$(this).attr('placeholder'))
			$(this).attr('placeholder','');
		});
		$('input, textarea').blur(function(){
			$(this).attr('placeholder', $(this).data('placeholder'));
		});
 	});
	//popup
	$('.popup').magnificPopup({
		type: 'inline'
	});
	// dream btn
	$('.close_dream').click(function(){
		
		$(this).find('span').toggleClass('rotated');
		$(this).siblings('.dream_content').slideToggle();
		$(this).parent().toggleClass('dream_height');
		$(this).toggleClass('red');
	});
	// scroll
	$('.scroll').mPageScroll2id();
	//mask
	jQuery(function($){
		$('.phone').mask('+38(099) 999-9999');
	});
	// review
	$('.review_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '.review_prev',
		nextArrow: '.review_next',
		responsive: [
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
			},
			{
			breakpoint: 600,
			settings: {
				slidesToShow: 1
			}
			}
		]
	});
	$('.review2_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '.review2_prev',
		nextArrow: '.review2_next',
		responsive: [
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
			},
			{
			breakpoint: 600,
			settings: {
				slidesToShow: 1
			}
			}
		]
	});
	// function rev(){
	// 	if($(window).width() < 768 && $(window).width() > 400)
	// 	$('.slick-current img').css('paddingRight', '30px');
	// 	$('.slick-current').next('img').css('paddingLeft', '30px');
	// }
	// rev();
	
});