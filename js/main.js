
let $start = $('.btn-start');
let $reset = $('.btn-reset');
$(function (){
$start.on('click', function(){
    $('.red-car').addClass('car-2');
})
$reset.on('click', function(){
    $('.red-car').removeClass('car-2');
})
})
