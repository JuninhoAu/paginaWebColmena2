$(document).ready(function(){
	var altura = $('.header').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.header').addClass('menu-fixed');
		} else {
			$('.header').removeClass('menu-fixed');
		}
	});
 
});

var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');
btnMenu.addEventListener('click', function(){
  nav.classList.toggle('mostrar');
});

nav.addEventListener('click', function(){
  nav.classList.toggle('mostrar');
});

   var random = Math.floor(Math.random() * $('.mostrar').length);
         $('.mostrar').hide().eq(random).show();





         
    