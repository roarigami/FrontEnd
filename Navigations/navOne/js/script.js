/******************
NavOne JavaScript
*******************/

//Hide .top-nav on on scroll down
let scrolled;
let lastScrollTop = 0;
let delta = 5;
let navHeight = $('.nav-container').outerHeight();

$(window).scroll(function(event) {
  scrolled = true;
});

setInterval(function() {
  if (scrolled) {
    hasScrolled();
    scrolled = false;
  }
}, 20);

function hasScrolled() {
  let st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  if (st > lastScrollTop && st > navHeight) {
    $('header').removeClass('header-down').addClass('header-up');
    } else if (st + $(window).height() < $(document).height()) {
      $('header').removeClass('header-up').addClass('header-down');
    }

  lastScrollTop = st;
}

/*Navigation Sub Menu Hover Dropdown Script*/
document.addEventListener("DOMContentLoaded", function(event) {
eventListener(hoverDrop);
});

 let hoverDrop = document.querySelectorAll(".hoverable");
let element  = document.querySelectorAll(".menu");

  function reveal(e, isEnter, state){
  let menuCurrent = isEnter.dataset.menu;
  let menState = state;
  for(let i = 0; i < element.length; i++) {
    if(menuCurrent === element[i].id && menState === true){
      element[i].classList.add("open");
    }
    else element[i].classList.remove("open");
  }
  console.log(menState);
}
function eventListener(box) {
  for(let i = 0, len = hoverDrop.length; i < len; i++){
    hoverDrop[i].addEventListener("mouseenter", () => reveal(box, hoverDrop[i], true));
    hoverDrop[i].addEventListener("mouseleave", () => reveal(box, hoverDrop[i], false));

    for(let i = 0, len = element.length; i < len; i++) {
      element[i].addEventListener("mouseenter", () => reveal(box, hoverDrop[i], true));
      element[i].addEventListener("mouseleave", () => reveal(box, hoverDrop[i], false));
    }

  }
  // console.log(box);
}

//Sidenav Script
let $btnTrigger = $('.sidenav-trigger');
let $sidenav = $('.sidenav');
let $btnClosesidenav = $('.sidenav-close');

  $btnTrigger.on('click', function () {
      $(this).toggleClass('is-open');
      $sidenav.addClass('is-open');
      document.body.style.overflowY = "hidden";
  });
  $btnClosesidenav.on('click', function () {
    $sidenav.removeClass('is-open');
    $btnTrigger.removeClass('is-open');
    document.body.style.overflowY = "auto";
});

//Sidenav Menu Script
$('.menu-link').click(function(){
	$('div.menu').removeClass('is-active');

	if ($(this).data('ref')) {
		let targetRef = $(this).data('ref');
		let $target = $('div.menu[data-menu="' + targetRef + '"]');

		$target.addClass('is-active');
	}
});
