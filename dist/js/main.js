
$(document).ready(function() {
	// === Burger Handler =====================================================================
	function burgerBtnAnimation(e) {
		$('.burger span:nth-child(1)').toggleClass('first');
		$('.burger span:nth-child(2)').toggleClass('second');
		$('.burger span:nth-child(3)').toggleClass('third');
		$('.burger span:nth-child(4)').toggleClass('fourth');
		let classNameElem = document.querySelector('.burger').dataset.activel;
		document.querySelector(`.${classNameElem}`).classList.toggle('open');
	}
	$('.burger').click((e) => burgerBtnAnimation(e));

	function closeMenu(e) {
		if(!e.target.closest('.menu') && !e.target.closest('.burger-wrap')) {
			document.querySelector('.menu').classList.remove('open')
		}
	}

	document.body.addEventListener('click', closeMenu)
	
	let menu = document.querySelector('.menu');
	menu.addEventListener('swiped-left', () => {
		menu.classList.remove('open');
	});
// === Burger Handler =====================================================================	;

// === Проверка, поддержка браузером формата webp ==================================================================

	function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});

// === // Проверка, поддержка браузером формата webp ==================================================================
	

	 $('.photo-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-title',
	});

	$('.slider-title').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  asNavFor: '.photo-slider',
	  centerMode: true,
	  focusOnSelect: true,
	  arrows: false,
	});

	$('.page').parallax();
	
	let sliderTitle = document.querySelector('.page-slider-title');
	let cursor = document.querySelector('.cursor');

	sliderTitle.addEventListener('mousemove', (e) => {
		cursor.style.top = `${e.clientY-10}px`;
		cursor.style.left = `${e.clientX + 20}px`;
		cursor.style.opacity = '1';
	})
	// sliderTitle.onmouseenter = function cursorOpacity() {
	// 	cursor.style.opacity = '1';
	// 	//sliderTitle.removeEventListener('mouseout', cursorOpacity0)
	// 	console.log('tess')
	// }
	sliderTitle.onmouseleave = function cursorOpacity0() {
		cursor.style.opacity = '0';
		console.log('leav')
		//sliderTitle.removeEventListener('mouseover', cursorOpacity1)
	}
	// sliderTitle.addEventListener('mouseover', cursorOpacity)
	// sliderTitle.addEventListener('mouseout', cursorOpacity0)

});