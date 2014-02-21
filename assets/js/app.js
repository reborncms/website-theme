$(function() {	
    $('.nav ul li a').bind('click',function(event){    	
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 119,
        }, 1000, 'easeOutQuart');        
    });

    /*
    	iOS7 Frosted Glass style scrollbar effect
    	Credit to abduzeedo.com 
    */

	html2canvas($("body"), { 
		onrendered: function(canvas) {
	    $(".blurheader").append(canvas);
	    $("canvas").attr("id","canvas");
			stackBlurCanvasRGB('canvas', 0, 0, $("canvas").width(), $("canvas").height(), 20);
		}
	});

	vv = setTimeout(function(){
		$("header").show();
		clearTimeout(vv);
		},200);

	$(window).scroll(function(){
  		$("canvas").css("-webkit-transform", "translatey(-" + $(window).scrollTop() + "px)");
	})

	window.onresize = function(){
	  	$("canvas").width($(window).width());
	}

	$(document).bind('touchmove', function(){
	  	$("canvas").css("-webkit-transform", "translatey(-" + $(window).scrollTop() + "px)");
	})

	$(document).bind('touchend', function(){
	  	$("canvas").css("-webkit-transform", "translatey(-" + $(window).scrollTop() + "px)");
	})
	
});