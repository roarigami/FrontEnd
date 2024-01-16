/*************
Ajax Tabs Script
*************/
$(document).ready(function(){
  let none = "none";
  let block = "block";
  const loadScreen = $('#loadScreen');
  let tabContentContainer;
  let tabBtn = document.querySelectorAll('.tabBtn');
  let tabBox = document.querySelectorAll('.tabBox');

  for (let i = 0; i < tabBtn.length; i++) {
  tabBtn[i].addEventListener('click', () => tabActive(i));
}

function tabActive(tabCurrent) {
  removeActive();
  tabBtn[tabCurrent].setAttribute("disabled", true);
  loadScreen.show();

  setTimeout(function(){

    switch(tabCurrent) {
      case 0:
      $.ajax({
          method : "POST",
          url : "tabOneBox.php",
          data : {},
          success : function(data) {
            tabBtn[tabCurrent].classList.add('tabActive');
            tabBox[tabCurrent].style.display = block;
            $('#tabOneBox').append(data);
            loadScreen.hide();
          },
          error: function (){
            alert("Something went wrong!");
          }
        });
      break;

      case 1:
      $.ajax({
          method : "POST",
          url : "tabTwoBox.php",
          data : {},
          success : function(data) {
            tabBtn[tabCurrent].classList.add('tabActive');
            tabBox[tabCurrent].style.display = block;
            $('#tabTwoBox').append(data);
            loadScreen.hide();
          },
          error: function (){
            alert("Something went wrong!");
          }
        });
      break;

    }


  },500);


}

function removeActive() {
  tabContentContainer = document.querySelectorAll('.tabContentContainer');
  for(let i = 0; i < tabBtn.length; i++) {
      tabBtn[i].classList.remove('tabActive');
      tabBtn[i].disabled = false;
      tabBox[i].style.display = none;
      tabContentContainer[0].remove();
  }
}


});



// $(document).ready(function(){
//   let loadScreen = $('#loadScreen');
//   let tabOneBtn = $('#tabOneBtn');
//   let tabTwoBtn = $('#tabTwoBtn');
//
//   tabOneBtn.click(function(e) {
//
//     e.preventDefault();
//       //disabled the button so user cannot click while loading
//       this.setAttribute("disabled", true);
//
//         loadScreen.show();
//         setTimeout(function(){
//           tabOne();
//         },500);
//
//       function tabOne() {
//         $('#errors').html("");
//         jQuery('#tabTwoContainer').remove();
//         $('#tabTwoBox').css("display" , "none");
//         $('#tabOneBox').css("display" , "block");
//         //reenable the tab one button
//         tabOneBtn.prop("disabled", false);
//         loadScreen.hide();
//
//         //Have to add index for these to work [0]
//         tabOneBtn[0].classList.add('tabActive');
//         tabTwoBtn[0].classList.remove('tabActive');
//       }
//
//   });
//
//   tabTwoBtn.click(function(e) {
//
//     e.preventDefault();
//       //disabled the button so user cannot click while loading
//       this.setAttribute("disabled", true);
//
//             loadScreen.show();
//             setTimeout(function(){
//               tabtwo();
//             },500);
//
//     function tabtwo() {
//       $.ajax({
//            method : "POST",
//            url : "tabTwoBox.php",
//            data : {},
//            success : function(data) {
//              $('#tabOneBox').css("display" , "none");
//              $('#tabTwoBox').css("display" , "block");
//              $('#tabTwoBox').append(data);
//
//              tabTwoBtn.prop("disabled", false);
//              loadScreen.hide();
//
//              tabTwoBtn[0].classList.add('tabActive');
//              tabOneBtn[0].classList.remove('tabActive');
//              //app();
//            },
//            error: function (){
//              alert("Something went wrong!");
//            }
//          });
//        }
//
//   });
//
//
//
// });
