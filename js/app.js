$(document).ready(function() {
    
    
     console.log( "ready!" );
    
    
    
var large = ['guitar_teaching-l.jpg', 'guitar-females-l.png', 'music_teacher-l.jpg','piano-l.jpg'];
    
var medium = ['guitar_teaching-m.jpg', 'guitar-females-m.png', 'music_teacher-m.jpg','piano-m.jpg'];
    
var small = ['guitar_teaching-s.jpg', 'guitar-females-s.png', 'music_teacher-s.jpg','piano-s.jpg'];
    
var choseImageL = large[Math.floor(Math.random() * large.length)]; 
    console.log(choseImageL);
    
var choseImageM = medium[Math.floor(Math.random() * medium.length)]; 
    console.log(choseImageM);

var choseImageS = small[Math.floor(Math.random() * small.length)]; 
    console.log(choseImageS);
    
    if ($(window).width() <= 400){
        console.log("S");
$('#banner').css({'background-image': 'url(img/home/banner/' + choseImageS  + ')'});
    }
    
    else if($(window).width() <= 800 && $(window).width() >= 400){
        console.log("M");
$('#banner').css({'background-image': 'url(img/home/banner/' + choseImageM  + ')'});
    }
    
    else if($(window).width() >= 800){
        console.log("L");
$('#banner').css({'background-image': 'url(img/home/banner/' + choseImageL  + ')'});
    }
    
    

    

$("#log").on("click", function(){
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

  
   $("#sideBarMsg ul li").on("click", function(){
       if($(window).width() <= 750){
        $("#sideBarMsg").addClass("marg-left");
        $("#conversation").removeClass("hide-resp");
       }
    });
    
    $(document).on(
        "click",
        "a",
        function(event) {

            // Stop the default behavior of the browser, which
            // is to change the URL of the page.
            event.preventDefault();

            // Manually change the location of the page to stay in
            // "Standalone" mode and change the URL at the same time.
            location.href = $(event.target).attr("href");

        }
    );
    
}); 



    

