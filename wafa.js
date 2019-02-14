$(document).ready(function(){

    $("#btn").click(function(e){
        e.preventDefault();
      $("html,body").animate({
          scrollTop: $("#scroll").offset().top
      }, 1500);
      })

      $("#itoggle").click(function(){
        $(".presentation").hide();
        $(".header ul li").show(hidden());
        $(".header ul ").show(hidden());
    })

    $("#itoggle").click(function(){
        $(".presentation").show();
        $(".header ul li").hide(shown());
        $(".header ul").hide(shown());
    })

    })
    
    
    
    