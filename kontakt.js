$(document).ready(function(){
  shown();
})


function hidden(){
    $("#itoggle").click(function(){
        $(".header ul li").hide(shown());
    })
}

function shown(){
    $("#itoggle").click(function(){
        $(".header ul li").show(hidden());
    })
}