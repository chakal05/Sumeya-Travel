$(document).ready(function(){
 shown();
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
  
    $( "#datepickera" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
  

})

function shown(){
  $("#itoggle").click(function(){
    $(".header ul").show(hidden());
    $(".header ul li").show(hidden());
    $(".pub").hide();
    $("#search").hide();
})
}

function hidden(){
  $("#itoggle").click(function(){
    $(".header ul").hide(shown());
    $(".header ul li").hide(shown());
    $(".pub").show();
    $("#search").show();
})
}