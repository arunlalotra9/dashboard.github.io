
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
      
         // ================ search bar css =======================

        $(".rightSidebar-search").click(function(){
            var id = $(this).parent().parent().attr('id');
            $("#"+id+" .rightSidebar-search").addClass("open");
        });


        // ================ search bar close css =======================

        $(document ).delegate( ".bxCloseSearch", "click", function() {
            var id = $(this).parent().parent().parent().parent().attr('id');
            $("#"+id+" .rightSidebar-search").removeClass("open");
        });
        
        
        // =============== #left-switch left side bar ======================

        $("#left-switch .collapse-sidebar").click(function(){
            $("#left-switch").toggleClass("collapsed");
            $('.right-section').toggleClass("left-collapsed");
        });

        // ======================  Expand / Hide ========================

        $('.moreless-button').click(function() {
            $('.moretext').slideToggle();
            if ($('.moreless-button').text() == "Expand") {
            $(this).text("Collapse");

            } else {
            $(this).text("Expand")
            }
        });

        // =============================
        $('input[type="checkbox"] + label').click(function(){
            $(this).toggleClass('active');
          });

    

    });