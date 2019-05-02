$(window).load(function () {
    $(".before-after").twentytwenty({
        before_label: 'Без скинали',
        after_label: 'Со скинали'
    });
    $('.before-slider').slick({
        draggable: false,
        dots: true,
        dotsClass: 'before-slider__dots',
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right')
    });
    $('.menu-button').on('click', function () {
        $('.menu').toggleClass('menu_active');
    });

    // Настройка select
    $('.select_checked').on('click', function(){
        $('.select__dropdown').slideToggle('select__dropdown_open');
    });
    $('.select__option').on('click', function(){
        var value = $(this).attr('data-value'); 
        $('#select-type').val(value);
        $('.select_checked').text(value);
        $('.select__dropdown').toggleClass('select__dropdown_open');
    });

    $("a[href^='#']").click(function () {
        var _href = $(this).attr('href');
        $("html, body").animate({scrollTop: $(_href).offset().top -20 + "px"});
        return false;
    });
    $('input[type="tel"]').mask("+7 (999) 999-99-99")


    // Показывать карту при докрутки
    var reviews = $('.reviews');
    var reviewsTop = reviews.offset().top;
    $(window).bind('scroll', function(){
        var windowTop = $(this).scrollTop();
        if (windowTop > reviewsTop) {
            $('#map').html('<script type="text/javascript" charset="utf-8" async src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad8a1c9d806147ab8f0d1b202ce5498e193eefcb727f73a714c5fea75faceddf8&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false" ></script>')
            console.log('Докрутили');
            $(window).unbind('scroll')
        }
    });
});