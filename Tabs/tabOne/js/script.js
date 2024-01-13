/*************
Ajax Tabs Script
*************/
$(document).ready(function(){

  let tabOneBtn = $('#tabOneBtn');
  let tabTwoBtn = $('#tabTwoBtn');

  tabOneBtn.click(function(e) {

        loadScreen.show();
        setTimeout(function(){
          userTimeline();
        },500);

      function userTimeline() {
        $('#errors').html("");
        jQuery('#tabTwoContainer').remove();
        $('#tabOneBox').css("display" , "block");
        $('#tabTwoBox').css("display" , "none");
        //reenable the team button
        tabOneBtn.prop("disabled", false);
        loadScreen.hide();

        //Have to add index for these to work [0]
        tabOneBtn[0].classList.add('lsActive');
        tabTwoBtn[0].classList.remove('lsActive');
      }

    });

  tabTwoBtn.click(function(e) {


    });



});
