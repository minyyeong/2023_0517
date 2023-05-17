        $(function(){
        var i=0;
        function slide(){
            i++;
            if(i>$(".slide > li:last").index()){
                i=0;
            }
            $(".slide > li").eq(i).stop().fadeIn(1000);
            $(".slide > li").eq(i-1).stop().fadeOut(1000);
            $(".hotissue > li > a").eq(i).stop().show(function(){
                $(this).css({"font-weight":"bold","color":"#000"});
                $(this).parent("li").css({"border-bottom":"2px solid #000","padding-bottom":"10px"},function(){
                    $(".hotissue > li > a").css({"font-weight":"500","color":"#767676"});
                    $(".hotissue > li > a").parent("li").css({"border-bottom":"none","padding-bottom":"-10px"});
                });
            })
        }
        setInterval(slide,4000);
        });

        $(function () {
                $(".hotissue > li > a").hover(function(){
                $(this).css({"font-weight":"bold","color":"#000"});
                $(this).parent("li").css({"border-bottom":"2px solid #000","padding-bottom":"10px"});
                $(".slide > li").eq($(this).index()).stop().show();
            },function(){
                $(".hotissue > li > a").css({"font-weight":"500","color":"#767676"});
                $(".hotissue > li > a").parent("li").css({"border-bottom":"none","padding-bottom":"-10px"});
            });
        });