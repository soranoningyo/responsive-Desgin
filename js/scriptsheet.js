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
