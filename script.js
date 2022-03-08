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
