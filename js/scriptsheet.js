/*global $,window*/

 // header height adjusting

$('.hc').css({

    paddingTop: ($(window).height() - $('.hc').height()) / 2

});
$('header').height($(window).height());

$(window).resize(function () {

    'use strict';

    $('header').height($(window).height());

    $('.hc').css({

        paddingTop: ($(window).height() - $('.hc').height()) / 2
    });
});
 // Toggling Active Mode

$('.price .plan').mouseenter(function () {
    'use strict';

    $(this).addClass('active').siblings().removeClass('active');
});
$('.price .plan').mouseleave(function () {
    'use strict';

    $('.price .plan:nth-of-type(2)').addClass('active').siblings().removeClass('active');
});

 // smooth scroll

$('header .hc .thplans').click(function () {

    'use strict';

    $('html ,body').animate({

        scrollTop: $('#plans').offset().top

    }, 1000);

    $('#' + $(this).data('value')).addClass('active').siblings().removeClass('active');

});