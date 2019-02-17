$(document).ready(function(){
    
shown();
   visa();
})

function shown(){
    $("#itoggle").click(function(){
        $(".header ul li").show(hidden());
    })

}

function hidden(){
    $("#itoggle").click(function(){
        $(".header ul li").hide(shown());
    })
}

function visaej(){
    $("#itoggle").click(function(){
        $(".header ul li").hide(shown());
        
    })
}

function visa(){
    $("#itoggle").click(function(){
        $(".header ul li").show(hidden());

    })
}
