$(function() {	
    $('.nav ul li a').bind('click',function(event){    	
    	event.preventDefault();
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 119,
        }, 1000, 'easeOutQuart');        
    });

    /* Menu Responsive Toggler */
    var toggler = $('#toggler');
        menu        = $('.nav ul');
        menuHeight  = menu.height();

    $(toggler).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
	
});