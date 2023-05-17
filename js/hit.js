$(function(){
    function prev(){
        $('.hit_2_list > li:last').prependTo('.hit_2_list');
        $('.hit_2_list').css('marginLeft',-306);
        $('.hit_2_list').stop().animate({marginLeft:0},1000);
    }

    function next(){
        $('.hit_2_list').stop().animate({marginLeft:-306},1000,function(){
        $('.hit_2_list > li:first').appendTo('.hit_2_list');
        $('.hit_2_list').css({marginLeft:0});
        });
    }

    function slide(){
        $(".hit_2_list").stop().animate({marginLeft:-306},1000,function(){
            $('.hit_2_list > li:first').appendTo('.hit_2_list');
            $('.hit_2_list').css({marginLeft:0});
        });
    }
    setInterval(slide,4000);

    $('.hit_1 > .btn > .prev > img').click(function(){
        prev();
    });

    $('.hit_1 > .btn > .next > img').click(function(){
        next();
    });

    //$('.hit_2_list > li > img').on('mouseenter',function(){
    //    $(this).pauseAnimation();
    //});
    //$('.hit_2_list > li > img').on('mouseleave',function(){
    //    $(this).resumeAnimation();
    //});
});