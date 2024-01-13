/*************
Ajax Tabs Script
*************/
$(document).ready(function(){
  let loadScreen = $('#loadScreen');
  let tabOneBtn = $('#tabOneBtn');
  let tabTwoBtn = $('#tabTwoBtn');

  tabOneBtn.click(function(e) {

        loadScreen.show();
        setTimeout(function(){
          tabOne();
        },500);

      function tabOne() {
        $('#errors').html("");
        jQuery('#tabTwoContainer').remove();
        $('#tabTwoBox').css("display" , "none");
        $('#tabOneBox').css("display" , "block");
        //reenable the tab one button
        tabOneBtn.prop("disabled", false);
        loadScreen.hide();

        //Have to add index for these to work [0]
        tabOneBtn[0].classList.add('tabActive');
        tabTwoBtn[0].classList.remove('tabActive');
      }

  });

  tabTwoBtn.click(function(e) {

    e.preventDefault();
      //disabled the button so user cannot click while loading
      this.setAttribute("disabled", true);

            loadScreen.show();
            setTimeout(function(){
              tabtwo();
            },500);

    function tabtwo() {
      $.ajax({
           method : "POST",
           url : "tabTwoBox.php",
           data : {},
           success : function(data) {
             $('#tabOneBox').css("display" , "none");
             $('#tabtwoBox').css("display" , "block");
             $('#tabTwoBox').append(data);

             tabTwoBtn.prop("disabled", false);
             loadScreen.hide();

             tabTwoBtn[0].classList.add('tabActive');
             tabOneBtn[0].classList.remove('tabActive');
             //app();
           },
           error: function (){
             alert("Something went wrong!");
           }
         });
       }

  });



});
