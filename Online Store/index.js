/**FirstSlider */
$(".slider-one").not(".slick-initialized").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  prevArrow: ".sit-slider .slider-btn .prev",
  nextArrow: ".sit-slider .slider-btn .next",
});

/**SecondSlider */
$(".slider-two").not(".slick-initialized").slick({
  autoplay: true,
  prevArrow: ".sit-slider-two .prev",
  nextArrow: ".sit-slider-two .next",
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
});
/**GLIDE*/
const glide1 = document.getElementById("glide1");

if (glide1)
  new Glide(glide1, {
    type: "carousel",
    startAt: 0,
    perView: 5,
    hoverpause: false,
    autoplay: 2000,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoints: {
      1200: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
    },
  }).mount();
/**BRANDS */
$(".slider-three").not(".slick-initialized").slick({
  autoplay: true,
  prevArrow: ".sit-slider-two .prev",
  nextArrow: ".sit-slider-two .next",
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
});
