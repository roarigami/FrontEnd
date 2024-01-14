/**************
Tab Two Script
**************/

$( document ).ready(function() {
  let tabOpen = 0;
  let btnTabs = document.querySelectorAll('.tab-btn');
  let tabContent = document.querySelectorAll('.tab-content');

  // btnTabs[0].classList.add('.tab-active');
  for (let i = 0; i < btnTabs.length; i++) {
    btnTabs[i].addEventListener('click', () => tabActive(i));
  }

  function tabActive(tabCurrent) {
    removeActive();
    btnTabs[tabCurrent].classList.add('tab-active');
    tabContent[tabCurrent].classList.add('tab-active');
    console.log(tabCurrent);
  }

  function removeActive() {
    for (let i = 0; i < btnTabs.length; i++) {
      btnTabs[i].classList.remove('tab-active');
      tabContent[i].classList.remove('tab-active');
    }
  }

});
