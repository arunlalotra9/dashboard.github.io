
    $(document).ready(function(){

        var windowHeight = window.innerHeight;
        var bxHeader_height = $('#bxNavBar').height();
        var bxFooter_height = $("#bxFooter").height();
        var bxPagination_height = $(".bxPagination").height();
        var bxLeftHeader_height = $(".pane-header").height();
        var bxRightHeader_height = $(".bxNavPillsContent").height();
        var bxRightSidebar_width = $("#right-switch").width();
        
        var bxNPContentHead_height = $(".bxNPContentHead").height();
         
        var bxExtension_height = parseInt(bxHeader_height) + parseInt(bxNPContentHead_height);

        var bxTotal_height = parseInt(bxHeader_height) + parseInt(bxFooter_height);

        var  bxLeftInnerHeight = parseInt(bxLeftHeader_height) + parseInt(bxPagination_height);
      
        var bxTabsHeight = parseInt(windowHeight) - parseInt(bxTotal_height);

        var bxLeftSearchTotal_height = parseInt(bxTabsHeight) - parseInt(bxLeftInnerHeight);
      
        var bxRightTabsPills = parseInt(bxTabsHeight) - parseInt(bxRightHeader_height);
      
        $(".bxContent").css('min-height', windowHeight+'px');

        $("#bxFullwidthContent").css('min-height', bxTabsHeight+'px');
      
        $(".bxNavPills ").css('height', bxRightTabsPills+'px');
        
        $(".leftSearchBoxArea").css('height', bxLeftSearchTotal_height+'px');

        $("#bxDopplerAutomation, #bxDopplerAction").css('margin-right', bxRightSidebar_width+'px');
        $("#bxDopplerAutomation, #bxDopplerAction").css('margin-top', '+=' + (bxExtension_height + 10) + 'px');


        var width = $( window ).width();
      
        if (width<767) {
         
            $('body').addClass('mobileResponsive');
            $('#left-switch').removeClass('active');
            $('#center-switch').removeClass('active');
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
        
        
        // =============== #left-switch left side bar ======================

        $("#left-switch .collapse-sidebar").click(function(){
            $("#left-switch").toggleClass("collapsed");
            $('.right-section').toggleClass("left-collapsed");
            $('.center-section').toggleClass("both-collapsed");

            if($('.right-section').hasClass('desktop-right') && $('.right-section').hasClass('center-collapsed')){
                $('.right-section').addClass('both-collapsed');
            }else{
                $('.right-section').removeClass('both-collapsed');
            }
        });
        // =============== #tasks-switch right side bar =========================

        $("#right-switch .collapse-sidebar").click(function(){
            $("#right-switch").toggleClass("collapsed");
            $('.center-section').toggleClass("center-collapsed");

            if($('.right-section').hasClass('task-collapsed') && $('.left-section').hasClass('center-collapsed')){
                $('.center-section').addClass('both-collapsed');
            }else{
                $('.center-section').removeClass('both-collapsed');
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

window.addEventListener('load', () => {
    let input = document.querySelector('#search');
    let tagInputField = document.querySelector('#addTag'); 
    let ul = document.querySelector('#ul');
    let listArray = ['javascript', 'apple', 'react-js', 'games', 'out', 'coding', 'dribble', 'watermelon', 'codepen', 'orange', 'stackoverflow', 'daily-ui', 'rest--full', 'push', 'something', 'teeth', 'ultra', 'ultrasound', 'you', 'zebra'];
    let set = 0;
    // toggle between add and search
    let toggleSearch = document.querySelector('.toggleSearch');
    let toggleAddTag = document.querySelector('.toggleAddTag');

    // elements to be displayed upon toggle
    let addContainer = document.querySelector('.addContainer');
    let searchContainer = document.querySelector('.searchContainer');
    // toggle between button and displaying search options
    let toggleClass = (event) => {
        // toggle between Button
        toggleSearch.classList.toggle('active');
        toggleAddTag.classList.toggle('active');

        // toggle between input fields
        addContainer.classList.toggle('show');
        searchContainer.classList.toggle('show');
       }
    // attaching event listener
    toggleSearch.addEventListener('click', toggleClass);
    toggleAddTag.addEventListener('click', toggleClass);
    toggleSearch.set = 1;
    toggleAddTag.set = 0;
    // temp addContainer's tag
    let tempTagArray = [];
    let colorList = [
        '#E9573F',
        '#37BC9B',
        '#967ADC',
        '#F6BB42',
        '#D770AD'
    ]

    // helper function for color picking
    let numPicker = () => {
        return Math.floor((Math.random() * colorList.length) + 1)
    }
    // function to create element
    const addTag = () =>  {
        listArray.sort();
        for(let i = 0; i < listArray.length; i++) {
            //let color = colorList[numPicker()];
            let li = document.createElement('li');
            let button = document.createElement('button');
            let span = document.createElement('i');
            span.classList.add('bi', 'bi-x');
            button.setAttribute('class', 'closeTag');
            button.appendChild(span);
            li.innerText = listArray[i];
            li.appendChild(button);
            ul.appendChild(li);
            li.style.backgroundColor = '#6286b28c';
            li.style.boxShadow = '0px 0px 3px #6286b28c';
            button.addEventListener('click', removeTag);
        }
    }
    addTag();
    
    function removeTempTag(event) {
        event.currentTarget.parentNode.parentNode.removeChild(event.currentTarget.parentNode);
        set--;
    }
    function removeTag(event) {
        event.currentTarget.parentNode.remove();
        let val = event.currentTarget.parentNode.innerText;
        let test = listArray.filter((value, i) => {
            return value != val;
        })
        listArray = test;
    }
  
    tagInputField.addEventListener('keyup', (event) => {
        if(event.key == "," || event.keyCode == 188 ){
            let tempTag = event.target.value.replace(/,/g, ' ');
            let trim = tempTag.trim();
            if(trim.length > 0) {
                tagInputField.value = "";
                let parentCon = document.querySelector('.addContainer');
                let buttonClass = document.createElement('div');
                let span = document.createElement('span');
                let i = document.createElement('i');
                i.setAttribute('class', 'bi bi-x');
                buttonClass.innerText = trim;
                buttonClass.setAttribute('class', 'buttonClass')
                span.appendChild(i);
                buttonClass.appendChild(span); 
                parentCon.insertBefore(buttonClass, parentCon.lastElementChild);
                span.addEventListener('click', removeTempTag);
                set++;
                console.log(set)
            } 
        }
        // set > 0 to ensure addTag doesnot fire on an emty "ENTER" keyPress
        else if ((event.key == 'Enter' || event.keyCode == 13) && set > 0){
                let tags = [...document.querySelectorAll('.addContainer .buttonClass')];
                let li = [...document.querySelectorAll('.ul li')];
                for(let i = 0; i < tags.length; i++){
                    listArray.push(tags[i].innerText.toLowerCase());
                    tags[i].parentNode.removeChild(tags[i]);
                }
                for(let i = 0; i < li.length; i++){
                    li[i].parentNode.removeChild(li[i]);
                }
                addTag();
        } 
    })
    input.addEventListener('keyup', () => {
        let inputTxt = input.value.toLowerCase();
        let li = [...document.querySelectorAll('.ul li')];
        for( i = 0; i < listArray.length; i++) {
          if(listArray[i].indexOf(inputTxt) > -1) {
              li[i].style.display = '';
          }
          else {
              li[i].style.display = 'none';
          }
        }
    })

})
