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

		if (!dots[0].classList.contains('dot--gone')) {
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
		const socials = document.querySelectorAll('.social--media');
		const cart = document.querySelector('.cart');
		const gift = document.querySelector('.fact__gift');

		if (windowTop > 40 && !topbar.classList.contains('scroll')) {
			logo.classList.add('logo--scroll');
			topbar.classList.add('topbar--scroll');
			nav.classList.add('nav--scroll');
		}
		if (windowTop < 40 || windowTop < lastScroll) {
			if (logo.classList.contains('logo--scroll'))
				logo.classList.remove('logo--scroll');
			if (topbar.classList.contains('topbar--scroll'))
				topbar.classList.remove('topbar--scroll');
			if (nav.classList.contains('nav--scroll'))
				nav.classList.remove('nav--scroll');
		}

		if (PortfolioTop <= -30) {
			if (cart.classList.contains('none'))
				setTimeout(function() {
					cartSwap();
				}, 1000);

			if (cart.classList.contains('none')) cart.classList.remove('none');

			if (gift.classList.contains('none')) gift.classList.remove('none');

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

			if (stars[0].classList.contains('reveal'))
				setTimeout(function() {
					swap();
				}, 2000);
		}

		lastScroll = windowTop;
	}
};

//------------------------
// Contact Form
//------------------------

$('#submit').click(function(e) {
	let fname = $('#name').val();
	let phone = $('#phone').val();
	let email = $('#email').val();
	let inquiry = $('#inquiry').val();
	let website = $('#website').val();
	let budget = $('#budget').val();
	var websiteCheck = document.getElementById('website--check').checked;
	var seoCheck = document.getElementById('seo--check').checked;
	var hostingCheck = document.getElementById('hosting--check').checked;

	// let websiteCheck = (websiteIsChecked) ? 'true' : 'false';
	// let seoCheck = ($(seoIsChecked).is(':clicked')) ? 'true' : 'false';
	// let hostingCheck = (hostingIsChecked) ? 'true' : 'false';
	$('#returnmessage').empty(); // To empty previous error/success message.
	// console.log($('#website--check').is(':clicked'));
	// Checking for blank fields
	if (fname == '' || email == '' || inquiry == '') {
		alert('Please Fill Required Fields');
		e.preventDefault();
	} else {
		// Returns successful data submission message when the entered information is stored in database.
		$.post(
			'../php/contact_form1.php',
			{
				fname1: fname,
				phone1: phone,
				email1: email,
				inquiry1: inquiry,
				website1: website,
				budget1: budget,
				websiteCheck1: websiteCheck,
				seoCheck1: seoCheck,
				hostingCheck1: hostingCheck
			},
			function(data) {
				$('#returnmessage').append(data); // Append returned message to message paragraph.

				if (
					data ==
					'Your Query has been received, We will contact you soon.'
				) {
					$('#inquiryform')[0].reset(); // To reset form fields on success.
				}
			}
		);
		e.preventDefault();
	}
});
