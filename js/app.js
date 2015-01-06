$(document).ready(function() {
    
    
     console.log( "ready!" );

$("#list").on("click", function(){
    console.log("click");
        if($("ul").css('display') == "none"){
            console.log("show");
            $(this).addClass("rotate");
            $("#list").addClass("bg");
            $("nav").addClass("padding");
            $("ul").addClass("show");
        }else{
            $(this).removeClass("rotate");
            $("ul").removeClass("show");
            $("nav").removeClass("padding");
            $("#list").removeClass("bg");
        }
        
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






    
    
    console.log( "ready!" );
    
    $(window).scroll(function(event){
        var scroll = $(window).scrollTop();
        console.log(scroll);
        
        if(scroll>20){
            $("#intro img").addClass("translate");
            $("#intro p").addClass("opa");
        }
        
    });
    



}); 



    

