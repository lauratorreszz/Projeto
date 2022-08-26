jQuery(document).ready(function($){
    //fixed header
    window.onscroll = function(){
        if(window.pageYOffset > 140) {
            $('#barra_nav').addClass("active");
        }else{
            $('#barra_nav').addClass("active");
        }
    }
});

//noticias
var swiper = new Swiper(".card-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });