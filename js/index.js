$(document).ready(function() {
    $('.header__burger-menu').click(function(){
        $('.header__burger-menu').toggleClass('header__menu-open');
        $('.header__menu').toggleClass('header__menu-open');
        $('.header__burder-img').toggleClass('header__menu-remove');
        $('body').toggleClass('fixed-page');
    });
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);