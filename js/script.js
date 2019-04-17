$('.side-nav-item').click(function(){
    $('.side-nav-item').removeClass('is-active');
    $(this).addClass('is-active');
});

$('.nav-btn').click(function(){
    $('.main-nav').toggleClass('is-open');
    $(this).hide();
    //$('.wrapper').addClass('is-side');
});

$('.main-nav-link').click(function(){
    $('.main-nav-link').removeClass('is-act');
    $(this).toggleClass('is-act');
})