var owl = $('.owl-carousel');

owl.owlCarousel({
    items:4,
    loop:true,
    margin:50,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav:false,
    responsive:{
        0:{items:1},
        600:{items:3},
        1000:{items:5},
    }
});

$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})

$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})