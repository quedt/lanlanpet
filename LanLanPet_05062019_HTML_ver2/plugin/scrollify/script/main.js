$(function() {
  $.scrollify({
	section:".panel",
	 scrollSpeed: 800,
	  easing: "easeOutExpo",
    sectionName:false,
	setHeights:false,
	overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    interstitialSection:".scrollify-head",
	  before: function(i,panels) {
      var ref = panels[i].attr("data-section-name");
$(".content").removeClass("moved");
$(".inner-cuahang").removeClass("moved");
      $('.panel').each(function() {
         if( $(this).attr('data-section-name') === ref ) {
            $(this).find('.content').addClass('moved');
            $(this).find('.inner-cuahang').addClass('moved');
         }
         else {
            $(this).removeClass('moved');
            $(this).removeClass('inner-cuahang');
         }
      });
	  
	   var sno = i+1;
            $(".panel").addClass("section_layder");
            $(".panel:nth-child("+sno+")").removeClass("section_layder");
    },
    after:function(i, panels) {
            var sno = isno = i+1;
           $(".panel").addClass("section_layder");
            $(".panel:nth-child("+sno+")").removeClass("section_layder");


            },
  });
  jQuery.scrollify.update();
});