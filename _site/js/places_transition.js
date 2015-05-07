var places = ['cristo-redentor', 'arcos-da-lapa', 'copacabana', 'pao-de-acucar'];
var index = 1;

var loop = setInterval(function(){
    $(".place").removeClass("current-place");
    $("."+places[index++]).addClass("current-place");

    index = index == places.length ? 0 : index;
}, 7000);
