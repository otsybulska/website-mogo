$(function () {

    //Параметры карусели
    $('#carousel1').carousel({
        interval: 3000
    })

    $('#carousel2').carousel({
        interval: 3000
    })

    //Плавная прокрутка к якорю при нажатии на пункт меню
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    //Плавная прокрутка к якорю при нажатии на пункт меню
    $("#preview-btn").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    //Кнопка возврата в топ страницы
    var top_show = 250; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
    var delay = 1000; // Задержка прокрутки
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрутки и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });

    //Анимация цифр
    function countup(className) { //className - имя класса, в котором есть число
        var countBlockTop = $("." + className).offset().top; //смещение блока с числом относительно верхнего края
        var windowHeight = window.innerHeight;//высота окна браузера
        var show = true;// отвечает, что если один раз счетчик сработает, больше не срабатывал
        $(window).scroll(function () {
            if (show && (countBlockTop < $(window).scrollTop() + windowHeight)) {
                show = false; //если мы видим число, то больше его не надо показывать

                $('.' + className).spincrement({ //вызов плагина с параметрами
                    from: 1,               //начинать с 1
                    duration: 2000        //задержка счетчика
                });
            }
        })
    }
    $(function () {
        countup("num", $(".num").text());
    });
});

svg4everybody()
