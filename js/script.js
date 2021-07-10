

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":959},"pages":[{"id":"page-home","displayName":"Home","link":{"linkType":"LinkTypePage","href":"#!page-home"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-information","displayName":"Information","link":{"linkType":"LinkTypePage","href":"#!page-information"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-news-press","displayName":"News & Press","link":{"linkType":"LinkTypePage","href":"#!page-news-press"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-schedule","displayName":"Schedule","link":{"linkType":"LinkTypePage","href":"#!page-schedule"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-contact-us-","displayName":"Contact Us!","link":{"linkType":"LinkTypePage","href":"#!page-contact-us-"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false}]}
/* slider buttons */
$(function() {
    try {
        var slider = $('.slider .unslider').children().get(0);
        var unslider = $(slider).data('unslider');
        $('.sub-nav').click(function() {
            unslider.next()
            $('.sub-nav-active').removeClass('sub-nav-active');
            $(this).addClass('sub-nav-active');
        });
    }
    catch(e) {
    }
})