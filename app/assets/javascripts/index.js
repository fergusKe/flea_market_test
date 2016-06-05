(function($) {
	$(function() {
		setButton();
		slider();
		categoryBarFixed();
	});
	function setButton() {
		$('.category .title').on('click', function() {
			$('.sub').slideUp(function() {
				$(this).css({'display': ''});
			});
			if ( $( '+ .sub', $(this) ).css('display') === 'none' ) {
				$( '+ .sub', $(this) ).slideDown();
			}
		});
	}
	function slider() {
		var index = 0,
				j_sliderBar = 0,
				j_slider = $('.slider'),
				j_slider_content = j_slider.find('.slider-content'),
				j_slider_ul = j_slider_content.find('ul'),
				j_slider_li = j_slider_ul.find('li'),
				j_slider_li_width = j_slider.width(),
				j_slider_li_length = j_slider_li.length;

		j_slider.append('<ul class="sliderBar"></ul>');
		j_sliderBar = $('.sliderBar');
		for (i = 0; i < j_slider_li.length; i++){
				j_sliderBar.append('<li></li>');
		}
		j_sliderBar_li = j_sliderBar.find('li');

		j_sliderBar_li.eq(index).addClass('active');
		j_sliderBar_li.click(function(){
			index = $(this).index();

			j_slider_ul.stop().animate({left: -index * j_slider_li_width }, 800, 'easeOutQuart');
			$(this).addClass('active').siblings('li').removeClass('active');
			console.log('index = ', index);
		});
		$('.next').on('click', function() {
			index++;
			if (index > j_slider_li_length - 1) {
				index = 0;
			}
			j_sliderBar_li.eq(index).addClass('active').siblings('li').removeClass('active');
			j_slider_ul.stop().animate({left: -index * j_slider_li_width }, 800, 'easeOutQuart');
		});
		$('.prev').on('click', function() {
			index--;
			if (index < 0) {
				index = j_slider_li_length - 1;
			}
			j_sliderBar_li.eq(index).addClass('active').siblings('li').removeClass('active');
			j_slider_ul.stop().animate({left: -index * j_slider_li_width }, 800, 'easeOutQuart');
		});
		$(window).resize(function() {
			j_slider_li_width = $(window).width();
			j_slider_li.width( j_slider_li_width );
			j_slider_ul.stop().animate({left: -index * j_slider_li_width }, 0, 'easeOutQuart');
		}).resize();
	}
	function categoryBarFixed() {
		var j_category = $('.category-area');
		var categoryTop = j_category.offset().top;
		var j_nav = $('.nav');
		var navHeight = $('.nav').height();
		var scrollTop = 0;
		$(window).scroll(function() {
			scrollTop = $(window).scrollTop();
			if (j_nav.css('display') === 'none') {
				navHeight = 0;
			} else {
				navHeight = $('.nav').height();
			}
			if (scrollTop >= categoryTop + navHeight) {
				j_category.css({
					'position': 'fixed'
				});
			} else {
				j_category.css({
					'position': 'relative'
				});
			}
		}).scroll();
	}
})(jQuery);