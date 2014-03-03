$(document).ready(function(){
var setFirst = $('.images').first();    
setFirst.addClass('active');
setTimeout(function(){showimages();},1000);
});

function change_background(){
    var setFirst = $('.images').first(),
        setActive = $('.active'),
        setNext = setActive.next(),
        setCheckActive = setActive.attr('id'),
        setCheckLast = $('.images').last().attr('id');
        
    if(setCheckActive == setCheckLast){
        setNext = setFirst;
        }
        
    $('.active').removeClass('active');
    setNext.addClass('active');
    setTimeout(function(){change_background()},1000);
    }
