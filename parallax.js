$(window).scroll(function() {
    paralaksa();
})

function paralaksa(){
    var wScroll = $(window).scrollTop();
    
    $('.part-image').css('margin-top', 6-(wScroll*0.008)+'em')
    
    $('.part-right').css('margin-top', 8-(wScroll*0.005)+'em')
    
    $('.part-left').css('margin-top', 8-(wScroll*0.02)+'em')
    
    $('.part-right').css('opacity', (wScroll*0.005))
    $('.part-left').css('opacity', (wScroll*0.02))
    $('.part-image').css('opacity', (wScroll*0.008))
    
    $('.banner').css('opacity', (wScroll*0.0005))
    $('.opinions').css('opacity', (wScroll*0.0005))
}
