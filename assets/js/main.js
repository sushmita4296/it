$(document).ready(function () {



// sticky menu

    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 5) {
        $(".sticky").removeClass("scroll-header");
        }else{
        $(".sticky").addClass("scroll-header");
        }
   });
   

 // wow js
 new WOW( {
    offset: 100, mobile: true
}
).init();


// testimonial slider
$('.testimonial-active').owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})







})