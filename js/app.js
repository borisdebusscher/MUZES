$(document).ready(function() {
    
    
     console.log( "ready!" );
    
    
    
var images = ['15782742899_c95fb12ae9_o.jpg', 'music_teacher.jpg', 'Impact.png','guitar-females.png','guitar_teaching.jpg' ];
var choseImage = images[Math.floor(Math.random() * images.length)]; 
    console.log(choseImage);
    
$('#banner').css({'background-image': 'url(img/home/banner' + choseImage  + ')'});

    

$("#login").on("click", function(){
        $("#logForm").removeClass("translate");
        $("#layer").removeClass("hide");
        $("body").addClass("overflow");
        $("header nav ul").addClass("translateLeft");
        $("header nav").removeClass("borderNull");
        $(".menuLayer").addClass("hide");
        $("html,body").removeClass("overflow");
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
            $(".changePic, .changeNoPic").addClass("opacity");
            $(".changePic, .changeNoPic").addClass("bgScale");
        });
      
$("#file").mouseout(function() {
            $(".changePic, .changeNoPic").removeClass("opacity");
            $(".changePic, .changeNoPic").removeClass("bgScale");
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
    
    

$("#commentButton").on("click", function(){
    var commentBlock = $(this).parent().parent().find(".comment");
    var commentInput = $(this).parent().parent().find(".commentInput");
    console.log(commentBlock);
    if($(commentBlock).hasClass('hide')){
        $(commentBlock).removeClass("hide");
        $(commentInput).removeClass("hide");
    }else{
        $(commentBlock).addClass("hide");
        $(commentInput).addClass("hide");
    }
    });
    
    
$("#studenten").on("click", function(){
        $("#wie-studenten").removeClass("hide");
        $("#wie-leerkrachten").addClass("hide");
        $("#wie-kunstliefhebbers").addClass("hide");
    }); 

$("#kunstliefhebbers").on("click", function(){
        $("#wie-studenten").addClass("hide");
        $("#wie-leerkrachten").addClass("hide");
        $("#wie-kunstliefhebbers").removeClass("hide");
    }); 
    
$("#leerkrachten").on("click", function(){
        $("#wie-studenten").addClass("hide");
        $("#wie-leerkrachten").removeClass("hide");
        $("#wie-kunstliefhebbers").addClass("hide");
    }); 
    
$(window).scroll(function(event){
        var scroll = $(window).scrollTop();
        console.log(scroll);
        
        if(scroll>0){
            $("#totop").removeClass("hideTop");
        }else{
            $("#totop").addClass("hideTop");
        }
        
    });
    
$('#totop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
    
    
     $("#scrollArchi").click(function() {
        $('body').animate({scrollTop: 414}, 800);
});
    
    $("#scrollBeeld").click(function() {
        $('body').animate({scrollTop: 3805}, 800);
});
    
    $("#scrollDans").click(function() {
        $('body').animate({scrollTop: 7484}, 800);
});

}); 



    

