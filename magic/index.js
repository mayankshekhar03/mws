$(document).ready(function(){
    $('.container').hide();
    
    $('#project').click(function(){
        $('#intro').hide();
        $('#projects').removeClass('animated fadeOut');
        $('#projects').addClass('animated fadeIn');
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
        $('#contact').removeClass('animated fadeOut');
        $('#contact').addClass('animated fadeIn');
        $('#contact').show();
    });
    
    $('#inf').click(function(){
        $('#intro').hide();
        $('#info').removeClass('animated fadeOut');
        $('#info').addClass('animated fadeIn');
        $('#info').show();
    });
    
    $('.back').click(function(){
        $('#intro').show();
        //$('.container').hide();
        $('.container').removeClass('animated fadeIn');
        $('.container').addClass('animated fadeOut');
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