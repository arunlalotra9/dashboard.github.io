
    $(document).ready(function(){

        //var alTab_height = $('.alTabBoxOuterTask').height();

        var windowHeight = window.innerHeight;
        var bxHeader_height = $('#bxNavBar').height();
        var bxFooter_height = $("#bxFooter").height();

        //var bxfullwidth_height = $(".alNavTabs").height();
        //var bxHtml_height = $(".bxHtml").height();
      
        var bxTotal_height = parseInt(bxHeader_height) + parseInt(bxFooter_height);
      
        var bxTabsHeight = parseInt(windowHeight) - parseInt(bxTotal_height);
      
        //var bxfullwidth_height = parseInt(bxHtml_height) - parseInt(bxTotal_height);
      
        // console.log('mainTabsHeight='+mainTabsHeight + " alWindow_height="+alWindow_height + " alHeader_height="+alHeader_height)
      
        //$(".alTabBoxOuterTask").css('max-height', mainTabsHeight+'px');
      
        $("html").css('min-height', windowHeight+'px');
        $("#bxFullwidthContent").css('min-height', bxTabsHeight+'px');
      
        $(".desktop-right, .left-sidebar").css('height', bxTabsHeight+'px');
      
        var width = $( window ).width();
      
        if (width<767) {
         
            $('body').addClass('mobileResponsive');
            $('#left-switch').removeClass('active');
            //$('#right-switch').removeClass('active');
            $('.right-section').css('width', '100%')
        }
      
        // $('.button-toggle-menu i.mdi').click(function() {
        //     //$(this).removeClass('mdi-menu');
        //     //$(this).addClass('mdi-menu-open');
      
        //     if($(this).hasClass("mdi-menu"))
        //      {
        //         $(this).addClass("mdi-menu-open");
        //         $(this).removeClass("mdi-menu");
        //      }
        //      else{
        //         $(this).addClass("mdi-menu");
        //         $(this).removeClass("mdi-menu-open");
        //      }
        // });
        
        
        // =============== #left-switch left side bar ======================

        $("#left-switch .collapse-sidebar").click(function(){
            $("#left-switch").toggleClass("collapsed");
            $('.right-section').toggleClass("left-collapsed");
        });

    

    });