"use strict";

$('.navBtn').on('click', function () {
  $('.nav').toggleClass('active');
});
AOS.init();
AOS.init({
  once: true // whether animation should happen only once - while scrolling down

});
AOS.refresh(); // ecalculate all offsets and positions of elements (called on window resize)
//# sourceMappingURL=all.js.map
