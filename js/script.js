'use strict';

window.addEventListener('scroll', scrolling);

function scrolling(e) {
	const windowTop = window.pageYOffset;
	const topbar = document.querySelector('.topbar');
	const logo = document.querySelector('.logo');
	const nav = document.querySelector('.nav');
	// const fact = document.querySelector('#fact-slice');
	const portfolio = document.querySelector('#portfolio-slice');
	const stars = document.querySelectorAll('.fa-star');
   	const distanceToTop = portfolio.getBoundingClientRect().top;
    // const y = window.innerHeight|| document.documentElement.clientHeight|| document.getElementsByTagName('body')[0].clientHeight;
    // const screenBottom = windowTop+y;
    console.log(distanceToTop);

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
	console.log
	if (distanceToTop <= -50) {
		stars.forEach(star => { 
			if(star.classList.contains('reveal')) star.classList.remove('reveal'); 
		});
	}
}