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

