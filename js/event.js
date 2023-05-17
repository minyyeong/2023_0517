$(function(){
    function slide(){
        $(".event_2 > ul").stop().animate({marginLeft:-1200},800,function(){
            $('.event_2 > ul > li:first').appendTo('.event_2 > ul');
            $('.event_2 > ul').css({marginLeft:0});
        });
    }
    setInterval(slide,4000);
});