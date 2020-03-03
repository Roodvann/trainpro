// When the user scrolls the page, execute fixedHeader 
window.onscroll = function() {
	fixedHeader();
};
// Get the header
var header = document.getElementById("header");
// Get the offset position of the navbar
var sticky = header.offsetTop;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function fixedHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

(function($) {
	$(function() {
		$('.menu_icon').on('click', function() {
			// $(this).closest('.top_menu').toggleClass('topMenuScript');
			// $('.top_menu').addClass('topMenuScript');
			$('.top_menu').slideToggle('medium').toggleClass('topMenuScript');
			console.log('Click on button');
		});
	});
})(jQuery);

$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});
