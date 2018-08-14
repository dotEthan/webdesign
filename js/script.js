'use strict';
window.onload = function event() {


	// Make the stars first scale in then swap to rotate anim.
	function cartSwap() {

		document.querySelector('.cart').classList.add('cart--hover');
		document.querySelector('.fact__gift').classList.add('gift--hover');
		document.querySelector('.facebook').classList.add('facebook--hover');
		document.querySelector('.twitter').classList.add('twitter--hover');
		document.querySelector('.linkedin').classList.add('linkedin--hover');
		document.querySelector('.dribbble').classList.add('dribbble--hover');
	}

	function swap() {
		const dots = document.querySelectorAll('.dot');
		const starArry = document.querySelectorAll('.fa-star');
		starArry.forEach(star => { 
			star.classList.remove('reveal');
			star.classList.add('spin'); 
		});

		if(!dots[0].classList.contains('dot--gone')) {
			dots.forEach(dot => {
				dot.classList.add('dot--gone');
			});
		}
	}
	let lastScroll = 0;
	let direction = true;

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
		const tower = document.querySelector('.tower');
		const signals = document.querySelectorAll('.signal');
		const socials = document.querySelectorAll('.social--media');
		const cart = document.querySelector('.cart');
		const gift = document.querySelector('.fact__gift');
		
		if(windowTop > 40 && !topbar.classList.contains('scroll')) {
			logo.classList.add('logo--scroll') ;
			topbar.classList.add('topbar--scroll');
			nav.classList.add('nav--scroll');
		}
		if(windowTop < 40 || windowTop < lastScroll) {
			if(logo.classList.contains('logo--scroll')) logo.classList.remove('logo--scroll');
			if(topbar.classList.contains('topbar--scroll')) topbar.classList.remove('topbar--scroll');
			if(nav.classList.contains('nav--scroll')) nav.classList.remove('nav--scroll');
		}
		
		if (PortfolioTop <= -30) {

			if(cart.classList.contains('none')) setTimeout(function(){ cartSwap(); }, 1000); 

			if(cart.classList.contains('none')) cart.classList.remove('none');

			if(gift.classList.contains('none')) gift.classList.remove('none');

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

			if (socials[0].classList.contains('none')) {
				socials.forEach(social => { 
					social.classList.remove('none');
				});
			}

			if(stars[0].classList.contains('reveal')) setTimeout(function(){ swap(); }, 2000); 
		}

		lastScroll = windowTop;
	}
}