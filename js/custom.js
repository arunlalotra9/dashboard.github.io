
    $(document).ready(function(){

        var windowHeight = window.innerHeight;
        var bxHeader_height = $('#bxNavBar').height();
        var bxFooter_height = $("#bxFooter").height();
        var bxPagination_height = $(".bxPagination").height();
        var bxLeftHeader_height = $(".pane-header").height();
      
        var bxTotal_height = parseInt(bxHeader_height) + parseInt(bxFooter_height);

        var  bxLeftInnerHeight = parseInt(bxLeftHeader_height) + parseInt(bxPagination_height);
      
        var bxTabsHeight = parseInt(windowHeight) - parseInt(bxTotal_height);

        var bxLeftSearchTotal_height = parseInt(bxTabsHeight) - parseInt(bxLeftInnerHeight);
      
      
        $(".bxContent").css('min-height', windowHeight+'px');

        $("#bxFullwidthContent").css('min-height', bxTabsHeight+'px');
      
        $(".leftSearchBoxArea").css('height', bxLeftSearchTotal_height+'px');
        
        //$(".leftSearchBoxArea").css('height', bxLeftSearchTotal_height+'px');

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