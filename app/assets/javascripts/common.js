(function() {
	$(function($) {
		setHamburger();
		setButton();
		
	});
	function setButton() {
		$('.nav-btn').on('click', function() {
			$(this).toggleClass('active');
			$('.nav').slideToggle();
		});
		$('.goTop-btn').on('click', function() {
			$('html, body').animate({
				scrollTop: 0
			}, 1000, 'easeOutQuart');
		});
	}
	function setHamburger() {
		var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
	    var hamburgers = document.querySelectorAll(".hamburger");
	    if (hamburgers.length > 0) {
	      forEach(hamburgers, function(hamburger) {
	        hamburger.addEventListener("click", function() {
	          this.classList.toggle("is-active");
	        }, false);
	      });
	    }
	}
})(jQuery);