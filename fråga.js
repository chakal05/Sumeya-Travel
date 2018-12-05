
    $(document).ready(function(){
    shown();
    $("#box").accordion({
        collapsible: true
    });
   
    
    })

    function shown(){
        $("#itoggle").click(function(){
            $(".ligne1").hide();
            $(".header ul ").css("background-color", "#007FFF");
            $(".header ul li").show(hidden());
        })
    }
    
    function hidden(){
        $("#itoggle").click(function(){
            $(".ligne1").show();
            $(".header ul li").hide(shown());
        })
    }
   