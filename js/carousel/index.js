$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 4
    },
    900: {
      items: 8
    },
    1200: {
      items: 8
    }
  }
})