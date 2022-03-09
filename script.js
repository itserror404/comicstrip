AOS.init();

var $upstairs = $('#upstairs');
var $basement = $('#basement');


// If go to bed button is selected, display section for upstairs
$('#up').click(function(){

    $basement.hide();
    $upstairs.css("opacity", 1);
    AOS.init();
    window.addEventListener('load', function() {
      AOS.refresh();
    });
});


// If investigate button is selected, display section for basement
$('#down').click(function(){
  $upstairs.hide();
  $basement.css("opacity", 1);
  AOS.init();
  window.addEventListener('load', function() {
    AOS.refresh();
  });
})




var $window = $(window);
var $elem = $(".ghost");
var $flicker = $("#flicker");
var $scare2 = $(".scare2");

//Check if scroll has arrived at ghost section
function isScrolledIntoView($elem, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

// Begin animation section after the viewer reaches that section of the comic
$(document).on("scroll", function () {
    if (isScrolledIntoView($elem, $window)) {
      $("#layer4").addClass("boo");
      $("#layer3").addClass("boo");
      $("#layer2").addClass("boo");
      $("#layer1").addClass("boo");
    }
    else{//Stop animation when outside of that section
      $("#layer4").removeClass("boo");
      $("#layer3").removeClass("boo");
      $("#layer2").removeClass("boo");
      $("#layer1").removeClass("boo");
    }

    if (isScrolledIntoView($flicker, $window)) {
      $("#flick4").addClass("boo");
      $("#flick3").addClass("boo");
      $("#flick2").addClass("boo");
      $("#flick1").addClass("boo");
    }
    else{//Stop animation when outside of that section
      $("#flick4").removeClass("boo");
      $("#flick3").removeClass("boo");
      $("#flick2").removeClass("boo");
      $("#flick1").removeClass("boo");
    }

    if (isScrolledIntoView($scare2, $window)) {
      $("#sc4").addClass("boo");
      $("#sc3").addClass("boo");
      $("#sc2").addClass("boo");
      $("#sc1").addClass("boo");


    }
    else{//Stop animation when outside of that section
      $("#sc4").removeClass("boo");
      $("#sc3").removeClass("boo");
      $("#sc2").removeClass("boo");
      $("#sc1").removeClass("boo");
    }

});


$(window).scroll(function(){
    $("h1").css("opacity", 1 - $(window).scrollTop() / 250);
  });
