AOS.init();

var $upstairs = $('#upstairs');
var $basement = $('#basement');

$upstairs.hide();
$basement.hide();

// If go to bed button is selected, display section for upstairs
$('#up').click(function(){
    $upstairs.show();
    $basement.hide();
});


// If investigate button is selected, display section for basement
$('#down').click(function(){
  $basement.show();
  $upstairs.hide();
})

var $window = $(window);
var $elem = $(".ghost");
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
});
