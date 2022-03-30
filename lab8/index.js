$(function() {
    var navIsShow = true
    $('#menu-btn').click(function() {
        if (navIsShow) {
            $('#navbar').removeClass('navbar')
            $('#navbar').css('width', 0)
            $('#navbar .navbar-nav').css('display', 'none')
        } else {
            $('#navbar').addClass('navbar')
            $('#navbar').css('width', '20%')
            setTimeout(function() {
                $('#navbar .navbar-nav').css('display', 'flex')
            }, 250)
        }
        navIsShow = !navIsShow
    })
})