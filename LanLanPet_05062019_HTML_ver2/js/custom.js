$(document).ready(function() {
  $(".select-cus select").click(function() {
    var open = $(this).data("isopen");
    if (open) {
      window.location.href = $(this).val()
    }
    $(this).data("isopen", !open);
  });

});
 // menu
 $(document).ready(function () {
	   var widthWinfirst = window.innerWidth;
     if (widthWinfirst > 850){
	 
 $('.menu .sidebar-menu> li').hover(
   function() {
	  $('.drop-menu', this).stop().slideDown();
 },
	 function() {
    $('.drop-menu', this).stop().slideUp();
  }
 );	 
 //hover
	 $(".menu .sidebar-menu> li").hover(function () {
 
    $(this).parent().parent().addClass("open");
 },
 function () {
        $(this).parent().parent().removeClass("open");
      }
	 
);
	  }
	  
	  if (widthWinfirst > 850){
	 
 $('.menu .sidebar-menu .drop-menu>li').hover(
   function() {
	  $('.menu-con', this).stop().slideDown(100);
 },
	 function() {
    $('.menu-con', this).stop().slideUp(100);
  }
 );	 
 //hover
	 $(".menu .sidebar-menu .drop-menu>li").hover(function () {
 
    $(this).addClass("sub-menu");
 },
 function () {
        $(this).removeClass("sub-menu");
      }
	 
);
	  }

   });
   /*giũ trạng thái menu*/

  $(document).ready(function () {
     var url = window.location;  
      $('ul.sidebar-menu li a[href="' + url + '"]').parent().addClass('active');
       $('ul.sidebar-menu li a').filter(function () {
          return this.href == url;		
     }).addClass('active').parent().addClass('active').parent().parent().addClass('active').parents().addClass('active');
  });


//});
// animation
function animateToTop(e) {
    e.preventDefault();
    var scrollToTop = window.setInterval(function() {
        var pos = window.pageYOffset;
        if ( pos > 0 ) {
            window.scrollTo( 0, pos - 20 );
        } else {
            window.clearInterval( scrollToTop );
        }
    }, 16);
}

// PUSHMENU 
$(document).ready(function() {
		$menuLeft = $('.pushmenu-left');
		$nav_list = $('#nav_list');
		$close_menu = $('#close-menu');
		
		$nav_list.click(function() {	
			var classActive=$menuLeft.attr('class');
			var classact='active';
			if(classActive.indexOf('pushmenu-open')>0)
			{
				$('body').addClass('TouchMobile');
			}
			else
			{
				$('body').removeClass('TouchMobile');	
			}
			$(this).toggleClass(classact);
			$('.pushmenu-push').toggleClass('pushmenu-push-toright');
			$menuLeft.toggleClass('pushmenu-open');
		});
		$close_menu.click(function() {	
			var classActive=$menuLeft.attr('class');
			var classact='active';
			if(classActive.indexOf('pushmenu-open')>0)
			{
				$('body').addClass('TouchMobile');
			}
			else
			{
				$('body').removeClass('TouchMobile');	
			}
			$(this).toggleClass(classact);
			$('.pushmenu-push').toggleClass('pushmenu-push-toright');
			$menuLeft.toggleClass('pushmenu-open');
		});
	});
	// end PUSHMENU
	 $(document).ready(function() {
   $(function () {
            
                $('.sidebar-menu').metisMenu();
            
            });
            $('.sidebar-menu').metisMenu({
            
            toggle: true,
            
            preventDefault: true,
            
            activeClass: 'active',
            
            collapseClass: 'collapse',
            
            collapseInClass: 'in',
            
            collapsingClass: 'collapsing',
            
            onTransitionStart: false,
            
            onTransitionEnd: false
            
            
            
            });
            });
	// qua trinh spa
$(document).ready(function() {
var widthWinfirst = window.innerWidth;
	 if (widthWinfirst > 820) {
		 
   var Hc = $(".quatrinh-spa ul li:nth-child(3) .star").height();
   var HUl = $(".quatrinh-spa li:nth-child(3)").height(); 
   $(".quatrinh-spa ul li .star").height(Hc);
   $(".quatrinh-spa ul li").height(HUl);
   // dich vu meo
    var Hm = $(".dichvu-meo ul li:last-child .star").height();
   var HUlm = $(".dichvu-meo li:last-child").height(); 
   $(".dichvu-meo ul li .star").height(Hm);
   $(".dichvu-meo ul li").height(HUlm);
   
 }
}); 			
	
$(document).ready(function() {
	
	$('.tbl-dichvu').find('tr').each(function(){
		
$(this).children('td').each(function(index,element) {
   
    $(element).hover(function(index){
        return function() { 
		
		 $('.tbl-dichvu th').removeClass("open");
		 $('.tbl-dichvu td').removeClass("open");
		 var $hover = $(this).closest('.tbl-dichvu');
		 $hover.find("th:eq("+index+")").addClass("open");	
		 $hover.find
		 ("td:nth-child("+(index + 1) +")").addClass("open");	
		 			 
	
		}
    }(index));
	$(element).mouseout(function(){
		$('.tbl-dichvu th').removeClass("open");
		 $('.tbl-dichvu td').removeClass("open");
	});
}
);
	});
			
});

// chat
$(document).ready(function() {
$("#chat-down").click(function() {
	$("#chat-up").show(0);
    $(".box-chat").slideDown("slow");
	$(this).hide(0);
});
$("#chat-up").click(function() {
	$("#chat-down").delay(500).show(0);
    $(".box-chat").slideUp("slow");
	$(this).delay(800).hide(0);
});
});

//Zoom 
$(document).ready(function() {
	//Zoom in
$("#zoomIn").click(function() {	
  $('.tile')
    // tile mouse actions
    .on('mouseover', function(){
      $(this).children('.photo').css({'transform': 'scale(1.4)'});
    })
    .on('mouseout', function(){
      $(this).children('.photo').css({'transform': 'scale(1)'});
    })
    .on('mousemove', function(e){
      $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    // tiles set up
    .each(function(){
      $(this)
        // add a photo container
        .append('<div class="photo"></div>')
        // some text just to show zoom level on current item in this example
       
        // set up a background image for each tile based on data-image attribute
        .children('.photo').css({'background-image': 'url('+ $(this).find("img").attr('src') +')'});
    });
	});
//Zoom in
$("#zoomOut").click(function() {	
  $('.tile')
    // tile mouse actions
    .on('mouseover', function(){
      $(this).children('.photo').css({'transform': 'scale(0.7)'});
    })
    .on('mouseout', function(){
      $(this).children('.photo').css({'transform': 'scale(1)'});
    })
    .on('mousemove', function(e){
      $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    // tiles set up
    .each(function(){
      $(this)
        // add a photo container
        .append('<div class="photo"></div>')
        // some text just to show zoom level on current item in this example
       
        // set up a background image for each tile based on data-image attribute
        .children('.photo').css({'background-image': 'url('+ $(this).find("img").attr('src') +')'});
    });
	});	
	});

	
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
		
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
			refElement.addClass("active");
			
        }
        else{
            currLink.removeClass("active");
			refElement.removeClass("active")
        }
    });
}
$(document).ready(function() {
var widthWinfirst = window.innerWidth;
var H1= $(".menu-fix").height();
var h2 =  H1 + 51;

	 if (widthWinfirst < 851) {
		 $(".scroll-content").css('marginTop', H1);
		  $(".bg-hide").css('top', h2);
		  
		
	 }
});

// trang thai link tai khoan cua toi
  $(document).ready(function () {
     var url = window.location;  
      $('.content-bottom div:last-child li a[href="' + url + '"]').parent().addClass('active');
       $('.content-bottom div:last-child li a').filter(function () {
          return this.href == url;		
     }).addClass('active').parent().addClass('active');
  });
  // trang thai link user
  $(document).ready(function () {
     var url = window.location;  
      $('.mobile-action .dropdown-menu ul li a[href="' + url + '"]').parent().addClass('active');
       $('.mobile-action .dropdown-menu ul li a').filter(function () {
          return this.href == url;		
     }).addClass('active').parent().addClass('active');
  });
// tai khoan cua toi
$(document).ready(function() {
var Hright = $(".box-right").height();
$(".box-left").height(Hright);
});
// end tai khoan cua toi

