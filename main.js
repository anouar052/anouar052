function scroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return -(c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var homeBtn = document.querySelector("#logo");
homeBtn.addEventListener("click", function () {
  scroll("#hero", 1000);
});

var musicBtn = document.querySelector("#musicBtn");
musicBtn.addEventListener("click", function () {
  scroll("#music", 1000);
});

var poolBtn = document.querySelector("#poolBtn");
poolBtn.addEventListener("click", function () {
  scroll("#pool", 1000);
});

var menuBtn = document.querySelector("#menuBtn");
menuBtn.addEventListener("click", function () {
  scroll("#menuHeader", 1000);
});
