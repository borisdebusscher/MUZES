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



    

