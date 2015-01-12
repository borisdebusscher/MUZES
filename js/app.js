$(document).ready(function() {
    
    
     console.log( "ready!" );

$("#login").on("click", function(){
        $("#logForm").removeClass("translate");
        $("#layer").removeClass("hide");
        $("body").addClass("overflow");
    }); 
    
$("#submit").on("click", function(){
        $("#layer").addClass("hide");
        $("#logForm").addClass("translate");
        $("body").removeClass("overflow");
        $("#user").val("");
        $("#pass").val("");
    }); 
    
$(".close").on("click", function(){
        $("#layer").addClass("hide");
        $("#logForm").addClass("translate");
        $("body").removeClass("overflow");
        $("#user").val("");
        $("#pass").val("");
    });
    
    
$("#layer").on("click", function(){
        $(this).addClass("hide");
        $("#logForm").addClass("translate");
        $("body").removeClass("overflow");
        $("#user").val("");
        $("#pass").val("");
    }); 
    
    
$(".close").mouseover(function() {
            $(this).addClass("rotate");
            $(this).addClass("bg");
        });
      
$(".close").mouseout(function() {
            $(this).removeClass("rotate");
            $(this).removeClass("bg");
        });
    
$("#change").on("click", function(){
        $("#changeForm").removeClass("trans");
        $("body").addClass("overflow");
}); 
      
$(".closeChange").on("click", function(){
        $("#changeForm").addClass("trans");
        $("body").removeClass("overflow");
    }); 
    
$(".closeChange").mouseover(function() {
            $(this).addClass("rotate");
            $(this).addClass("arrow");
        });
      
$(".closeChange").mouseout(function() {
            $(this).removeClass("rotate");
            $(this).removeClass("arrow");
        });
    
$("#file").mouseover(function() {
            $(".changePic").addClass("opacity");
            $(".changePic").addClass("bgScale");
        });
      
$("#file").mouseout(function() {
            $(".changePic").removeClass("opacity");
            $(".changePic").removeClass("bgScale");
        });
    
$(".closeMenu").mouseover(function() {
            $(this).addClass("rotate");
            $(this).addClass("arrowMenu");
        });
      
$(".closeMenu").mouseout(function() {
            $(this).removeClass("rotate");
            $(this).removeClass("arrowMenu");
        });
    
$(".menu").on("click", function(){
        $("header nav ul").removeClass("translateLeft");
        $("header nav").addClass("borderNull");
        $(".menuLayer").removeClass("hide");
        $("html,body").addClass("overflow");
    }); 
    
$(".closeMenu").on("click", function(){
        $("header nav ul").addClass("translateLeft");
        $("header nav").removeClass("borderNull");
        $(".menuLayer").addClass("hide");
        $("html,body").removeClass("overflow");
    }); 
    
$(".menuLayer").on("click", function(){
        $("header nav ul").addClass("translateLeft");
        $("header nav").removeClass("borderNull");
        $(".menuLayer").addClass("hide");
        $("html,body").removeClass("overflow");
    }); 
    
$("#comment").on("click", function(){
    if($(".comment").attr("class") == "hide"){
        $(".comment").removeClass("hide");
        $(".commentInput").removeClass("hide");
    }else{
        $(".comment").addClass("hide");
        $(".commentInput").addClass("hide");
    }
    });
    
    
    
$(".menu").on("swipe",function(event){
        $("header nav ul").removeClass("translateLeft");
        $("header nav").addClass("borderNull");
        $(".menuLayer").removeClass("hide");
        $("html,body").addClass("overflow");
});
    
$(".menu").swipe({
  swipeRight:function(event, direction, distance, duration, fingerCount) {
        $("header nav ul").removeClass("translateLeft");
        $("header nav").addClass("borderNull");
        $(".menuLayer").removeClass("hide");
        $("html,body").addClass("overflow");
  }
});
    
var images = ['home/15782742899_c95fb12ae9_o.jpg', 'music_teacher.jpg', 'Impact.png'];
$('#banner').css({'background-image': 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
    
var bgArray = ['home/15782742899_c95fb12ae9_o.jpg', 'music_teacher.jpg', 'Impact.png'];
    var bg = bgArray[Math.floor(Math.random() * bgArray.length)];

    $('#banner').css('background', bg);

    // If you have defined a path for the images
    var path = 'img/';

    // then you can put it right before the variable 'bg'
    $('#banner').css('background', path+bg);
    
    
     $('a[href*=#]:not([href=#])').click(function() {
         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                 }, 1000);
                 return false;
             }
         }
     });


}); 



    

