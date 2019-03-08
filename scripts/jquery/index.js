// $(window).resize(logScreenSize);

$(function(){
  // logScreenSize();
  resizeElements(['.my-button-people-name', '.my-button-jump-to-people'])
  if (Modernizr.mq)('(min-width:576px)'){
    $('.my-button-people-name').css('width','180px');

  }


  $('.my-button-people-name').on('click', function ())
    $(this).toggleClass('btn-secondary btn-danger');
var $button= $(this).closest('div').find('.my-button-jump-to-people').toggleClass('d-none d-block');
      $button.toggleClass=('d-none');
  var id = $button.find('a').attr('href');
          $(id).toggleClass('d-none');
  }

});


.my-flexbox-container{
  display:flex;
  .flex-flow: row wrap;
  allign-contetnt:flex-start;
  justify-content: space-between;
}
