$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 4,
    },
    900: {
      items: 6,
    },
    1200: {
      items: 7,
    },
  },
});
