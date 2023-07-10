
    $(document).ready(function(){

        

        var windowHeight = window.innerHeight;
        var bxHeader_height = $('#bxNavBar').height();
        var bxFooter_height = $("#bxFooter").height();
        var bxPagination_height = $(".bxPagination").height();
        var bxLeftHeader_height = $(".pane-header").height();
        var bxRightHeader_height = $(".bxNavPillsContent").height();
        var bxRightSidebar_width = $("#agents-switch").width();
        var bxLeftSideCard_height = $(".leftSearchBoxArea .card").height();
        

        var bxCardLeft_height = parseInt(bxTabsHeight) - parseInt(bxLeftHeader_height);
        var bxNPContentHead_height = $(".bxNPContentHead").height();
         
        var bxExtension_height = parseInt(bxHeader_height) + parseInt(bxNPContentHead_height);

        var bxTotal_height = parseInt(bxHeader_height) + parseInt(bxFooter_height);

        var  bxLeftInnerHeight = parseInt(bxLeftHeader_height) + parseInt(bxPagination_height);
      
        var bxTabsHeight = parseInt(windowHeight) - parseInt(bxTotal_height);

        var bxLeftSearchTotal_height = parseInt(bxTabsHeight) - parseInt(bxLeftInnerHeight);
      
        var bxRightTabsPills = parseInt(bxTabsHeight) - parseInt(bxRightHeader_height);
      
        $("body").css('min-height', windowHeight+'px');

        $("#bxFullwidthContent").css('min-height', bxTabsHeight+'px');
        $(".DashboardPage .desktop-right .rightDashBoxArea").css('max-height', bxTabsHeight+'px');
      
        $(".bxNavPills ").css('height', bxRightTabsPills+'px');

        $(".pane-header").css('height', bxLeftHeader_height+'px')
        //$(".leftSearchBoxArea .card").css('height', bxLeftSideCard_height+'px') 

        $(".leftSearchBoxArea").css('height', bxCardLeft_height+'px') 
        
        $(".DopplerPage .left-sidebar, .StreamPage .left-sidebar, .DashboardPage .left-sidebar ").css('height', bxTabsHeight+'px');

        $("#bxDopplerAutomation, #bxDopplerAction").css('margin-right', bxRightSidebar_width+'px');
        $("#bxDopplerAutomation, #bxDopplerAction").css('margin-top', '+=' + (bxExtension_height + 10) + 'px');


        var width = $( window ).width();
      
        if (width<767) {
         
            $('body').addClass('mobileResponsive');
            $('#tasks-switch').removeClass('active');
            $('#agents-switch').removeClass('active');
            $('.right-section').css('width', '100%')
        }
      
         // ================ search bar css =======================

        $(".rightSidebar-search").click(function(){
            var id = $(this).parent().parent().parent().attr('id');
            $("#"+id+" .rightSidebar-search").addClass("open");
        });


        // ================ search bar close css =======================

        $(document ).delegate( ".bxCloseSearch", "click", function() {
            var id = $(this).parent().parent().parent().parent().parent().attr('id');
            $("#"+id+" .rightSidebar-search").removeClass("open");
        });

        // =============== #tasks-switch left side bar ======================

        $("#tasks-switch .collapse-sidebar").click(function(){
            $("#tasks-switch").toggleClass("collapsed");
            $('.right-section').toggleClass("task-collapsed");

            if($('.right-section').hasClass('task-collapsed') && $('.right-section').hasClass('agent-collapsed')){
                $('.right-section').addClass('both-collapsed');
            }else{
                $('.right-section').removeClass('both-collapsed');
            }
        });


        // =============== #tasks-switch right side bar =========================

        $("#agents-switch .collapse-sidebar").click(function(){
            $("#agents-switch").toggleClass("collapsed");
            $('.right-section').toggleClass("agent-collapsed");
            if($('.right-section').hasClass('task-collapsed') && $('.right-section').hasClass('agent-collapsed')){
                $('.right-section').addClass('both-collapsed');
            }else{
                $('.right-section').removeClass('both-collapsed');
            }
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

        // ============================= input type check box =================
        $('input[type="checkbox"] + label').click(function(){
            $(this).toggleClass('active');
        });

        //====================== custom checkbox ==============================
        $('#selectall').click(function() { $(this.form.elements).filter(':checkbox').prop('checked', this.checked);
        });

        // ====================== bxUserOnclick btn ==================================
        $('.bxUserOnclick').click(function(){
            $(".bxUserOnclick").toggleClass("rotate");
            $('.bxUserBox').toggleClass("d-none");

        });

});
