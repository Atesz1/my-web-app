//jQuery(document).ready(function(){
//    alert("hello");
//});
$(document).ready(function(){
  var ths = $('th');
  var highlights = $('.highlighted');
  var myTh= $('#my-th');

  $('th').on('mouseover', function (event){
    event.preventDefault();
    $('.highlighted').removeClass('highlighted');
    $(this).addClass('highlighted');
  });

});
