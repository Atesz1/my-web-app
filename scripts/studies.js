window.onload = function(){
  var ths = document.getElementsByTagName('th');
  var highlights = document.getElementsByClassName('highlighted');
  var myId = document.getElementById('my-th');
}

var ths = document.getElementsByTagName('th');

for (var i = 0; i < ths.length-1; i++) {
  ths[i].addEventListener ('mouseover', function(event){
      event.preventDefault();
      var highlighteds =
        document.getElementsByClassName('highlighted');

      for(var i=highlighteds.length-1; i >= 0 ; i--){
          highlighteds[i].classList.remove('highlighted');
        }
      this.classList.add('highlighted');
  });
}

// function myFunction(event){
//   event.preventDefault();
//   this.classList.add('highlighted');
// }
