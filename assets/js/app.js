$(function() {	
    $('.nav ul li a').bind('click',function(event){    	
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 119,
        }, 1000, 'easeOutQuart');        
    });
	
});