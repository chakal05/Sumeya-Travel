$(document).ready(function(){
 
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
  
    $( "#datepickera" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
  
    $("#itoggle").click(function(){
      $(".header ul").show(hidden());
      $(".header ul li").show(hidden());
      $(".pub").hide();
      $("#search").hide();
  })

  $("#itoggle").click(function(){
    $(".header ul").hide(shown());
    $(".header ul li").hide(shown());
    $(".pub").show();
    $("#search").show();
})

})

