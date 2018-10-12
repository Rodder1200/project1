(function() {
  var me = {},
    hero = document.querySelector(".hero"),
    points = document.querySelectorAll(".points");

  me.bgs = [
    "url('./images/bg1.jpg') center/cover no-repeat",
    "url('./images/bg2.jpg') center/cover no-repeat",
    "url('./images/bg3.jpg') center/cover no-repeat",
    "url('./images/bg4.jpg') center/cover no-repeat"
  ];
  me.counter = 1;
  me.stop = false;
  me.sliderSpeed = 5000;

  me.onPoint = function() {
    points[0].classList.add("active");

    for (var i = 0; i < points.length; i++) {
      points[i].addEventListener("click", changeBg);
    }
  };

  function changeBg(e) {
    e.preventDefault();
    me.stop = true;
    clearActive();
    switch (e.target.className) {
      case "points point0":
        hero.style.background = me.bgs[0];
        e.target.classList.add("active");
        break;
      case "points point1":
        hero.style.background = me.bgs[1];
        e.target.classList.add("active");
        break;
      case "points point2":
        hero.style.background = me.bgs[2];
        e.target.classList.add("active");
        break;
      case "points point3":
        hero.style.background = me.bgs[3];
        e.target.classList.add("active");
        break;
    }
  }

  me.carouselStart = function() {
    if (!me.stop) {
      setTimeout(setTimer, me.sliderSpeed);
    }
  };

  me.carouselStop = function() {
    clearTimeout(me.CarouselStart);
  };

  function setTimer() {
    if (me.counter < 4 && !me.stop) {
      clearActive();
      hero.style.background = me.bgs[me.counter];
      points[me.counter].classList.add("active");
      me.counter++;
    } else if (!me.stop) {
      clearActive();
      me.counter = 1;
      hero.style.background = me.bgs[0];
      points[0].classList.add("active");
    }

    me.carouselStart();
  }

  function clearActive() {
    for (var i = 0; i < points.length; i++) {
      points[i].classList.remove("active");
    }
  }

  royalEv.hero = me;
})();
