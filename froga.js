
    $(document).ready(function(){
        $("#itoggle").click(function(){
            $(".ligne1").hide();
            $(".header ul li").show(hidden());
        })

        $("#box").accordion({
        collapsible: false
        });
          $(".ui-accordion-header").css("background","#1f1f1f") ;
          $(".ui-accordion-header").css("color","#fff") ;
          $(".ui-accordion-header.ui-state-active ").css("background","#1f1f1f") ;
          
        $("#itoggle").click(function(){
            $(".ligne1").show();
            $(".header ul li").hide(shown());
        })

    
    })
