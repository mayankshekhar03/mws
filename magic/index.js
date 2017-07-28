$(document).ready(function(){
    $('.container').hide();
    
    $('#project').click(function(){
        $('#intro').hide();
        $('#projects').removeClass('animated bounceOutUp');
        $('#projects').addClass('animated bounceInDown');
        $('#projects').show();
        $('#p1').siblings().removeClass('selected');
        $('#p1').addClass('selected');
        $('.details .P1').show();
        $('.details .P1').siblings().hide();
        $('.list').bind('click', function(event) {
            var proid = '#' + event.target.id;
            var proclass = '.' + event.target.id.toUpperCase();
            $(proid).addClass('selected');
            $(proid).siblings().removeClass('selected');
            $('.details ' + proclass).show();
            $('.details ' + proclass).siblings().hide();
        });
    });
    
    $('#contac').click(function(){
        $('#intro').hide();
        $('#contact').removeClass('animated bounceOutUp');
        $('#contact').addClass('animated bounceInDown');
        $('#contact').show();
    });
    
    $('.back').click(function(){
        $('#intro').show();
        //$('.container').hide();
        $('.container').removeClass('animated bounceInDown');
        $('.container').addClass('animated bounceOutUp');
        setTimeout(function(){
            $('.container').hide();
        }, 1000);
    });
    
    if($(window).width() < 1000) {
        $('.list').hide();
        $('.list').click(function(){
            $('.list').toggle();
        });
    }
    
    $('#menu').click(function(){
        $('.list').toggle();
    });
});