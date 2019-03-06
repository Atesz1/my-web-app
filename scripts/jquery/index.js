// $(window).resize(logScreenSize);


$(function(){
  // logScreenSize();
  resizeElements(['.my-button-people-name','.my-button-jump-to-people']);
});


//function resizeButtons(){
  //var width = 0;

  //$('.my-button-people-name').css('width', 'auto');

  //$('.my-button-people-name').each(function(){
      //console.log($(this).css('width'));
    //var thiswidth = parseFloat($(this).css('width'));

    //if(thiswidth > width){
      //width = thiswidth;
    //}

  //});

  //$('.my-button-people-name').css('width', width);
//}

function resizeElements(elements){
  $.each(elements, function(index, element)){

  var width = 0;


  $(element).css('width', 'auto');

  $(element).each(function(){
      //console.log($(this).css('width'));
    var thiswidth = parseFloat($(this).css('width'));

    if(thiswidth > width){
      width = thiswidth;
    }
  });

  $(element).css('width', width);
}


function logScreenSize(){

  var size;

  switch (true) {

    case Modernizr.mq('(min-width: 1200px)'):
      size = 'xl';
      break;

    case Modernizr.mq('(min-width: 992px)'):
      size = 'lg';
      break;

    case Modernizr.mq('(min-width: 768px)'):
      size = 'md';
      break;

    case Modernizr.mq('(min-width: 576px)'):
      size = 'sm';
      break;

    default:
      size = 'xs';
      break;

  }


  console.log(`The size of your screen is ${size}`);

}
