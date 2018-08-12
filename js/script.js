'use strict';
window.onload = function event() {

	// Make the stars first scale in then swap to rotate anim.
	function swap() {
		const dots = document.querySelectorAll('.dot');
		const starArry = document.querySelectorAll('.fa-star');
		starArry.forEach(star => { 
			star.classList.remove('reveal');
			star.classList.add('spin'); 
		});

		if (!dots[0].classList.contains('dot--gone')) {
			console.log('now');
			dots.forEach(dot => { 
				dot.classList.add('dot--gone');

			});
		}
	}

	// Client scrolls, everythign comes in.
	window.addEventListener('scroll', scrolling, false);

	function scrolling(e) {

		const windowTop = window.pageYOffset;
		const topbar = document.querySelector('.topbar');
		const logo = document.querySelector('.logo');
		const nav = document.querySelector('.nav');
		const portfolio = document.querySelector('#portfolio-slice');
	   	const PortfolioTop = portfolio.getBoundingClientRect().top;
		const stars = document.querySelectorAll('.fa-star');
		const bell = document.querySelector('.bell');
		const tower = document.querySelector('.tower');
		const signals = document.querySelectorAll('.signal');
		const cart = document.querySelector('.cart');

		if(windowTop > 40 && !topbar.classList.contains('scroll')) {
			logo.classList.add('logo--scroll') ;
			topbar.classList.add('topbar--scroll');
			nav.classList.add('nav--scroll');
		}
		if(windowTop < 40) {
			if(logo.classList.contains('logo--scroll')) logo.classList.remove('logo--scroll');
			if(topbar.classList.contains('topbar--scroll')) topbar.classList.remove('topbar--scroll');
			if(nav.classList.contains('nav--scroll')) nav.classList.remove('nav--scroll');
		}
		
		if (PortfolioTop <= -30) {

			if(bell.classList.contains('none')) bell.classList.remove('none');

			if(cart.classList.contains('none')) cart.classList.remove('none');

			if(tower.classList.contains('none')) tower.classList.remove('none');

			if(!signals[0].classList.contains('blinking')) {
				signals.forEach(signal => { 
					signal.classList.add('blinking');
				});
			}

			if (!stars[0].classList.contains('in')) {
				stars.forEach(star => { 
					star.classList.add('reveal');
					star.classList.add('in'); 
				});
			}

			if(stars[0].classList.contains('reveal')) setTimeout(function(){ swap(); }, 2000); 
		}
	}
}