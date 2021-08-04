$(document).ready(function() {
    $('.header__burger-menu').click(function(){
        $('.header__burger-menu').toggleClass('header__menu-open');
        $('.header__menu').toggleClass('header__menu-open');
        $('.header__button-remove').addClass('header__menu-remove');
        $('body').toggleClass('fixed-page');
    });
});

$(document).ready(function() {
    $('.header__button-remove').click(function(){
        $('.header__menu').removeClass('header__menu-open');
    });
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);


$('.faq__card').click(function(){
    $(this).next().slideToggle();
    $(this).toggleClass('minus');
})