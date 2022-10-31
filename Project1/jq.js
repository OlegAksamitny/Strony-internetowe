
$('button.contact').on('click', function () {
    $('body, html').animate({scrollTop: $('section.contact').offset().top - 100 })
})

$(window).on('scroll', function () {
    if ($(document).scrollTop() > $('section.pictures').offset().top - 300) {
        $('.img1, .img2').addClass('active')
    }
    if ($(document).scrollTop() < 200) {
        $('.img1, .img2').removeClass('active')
    }
})

$('menu').on('click', function () {
    $('nav').toggleClass('active')
})
$('.click>div:nth-of-type(1)').on('click', function () {
    $('body, html').animate({scrollTop: $('section.meet').offset().top}) 
})
$('.click>div:nth-of-type(2)').on('click', function () {
    $('body, html').animate({scrollTop: $('.work>img').offset().top}) 
})
$('.click>div:nth-of-type(3)').on('click', function () {
    $('body, html').animate({scrollTop: $('.termonials').offset().top - 100}) 
})
$('.click>div:nth-of-type(4)').on('click', function () {
    $('body, html').animate({scrollTop: $('.ourskills').offset().top}) 
})
$('aside').on('click', function () {
    $('body,html').animate({ scrollTop: $('nav').offset().top })
})

$('.meet>button').on('click', function () {
    $('.meet>button').toggleClass('bu')
})
$('.basket>img').on('click', function () {
     $('.pop, .blur').addClass('active')
})
 
$('.pop>i').on('click', function () {
    $('.pop, .blur').removeClass('active')
})