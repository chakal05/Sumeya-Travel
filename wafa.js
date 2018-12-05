$(document).ready(function(){

    $("#btn").click(function(e){
        e.preventDefault();
      $("html,body").animate({
          scrollTop: $("#scroll").offset().top
      }, 1000);
      })

     shown();
    })
    
    function shown(){
        $("#itoggle").click(function(){
            $(".presentation").hide();
            $(".header ul li").show(hidden());
        })
    }
    
    
    function hidden(){
        $("#itoggle").click(function(){
            $(".presentation").show();
            $(".header ul li").hide(shown());
        })
    }
      
    