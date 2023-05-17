        $(function(){
            $(".header_top > .fa-regular").click(function(){
                $(".header_top").slideUp();
                $("header").css({height:208});
            });
        });

        $(function(){
            $(".middle_nav_brand > h3 > a").click(function(){
                $(".brand_ex").slideToggle();
            });
        });

        $(function(){
            $(".nav_1_cg").click(function(){
                $(".nav_1_cg > .allct").slideToggle();
            });
        });