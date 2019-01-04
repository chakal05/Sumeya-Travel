$(document).ready(function(){
 shown();
 $( function() {
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
  } );

  $( function() {
    $( "#datepickera" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
  } );
  

})


function hidden(){
    $("#itoggle").click(function(){
        $(".header ul").hide(shown());
        $(".header ul li").hide(shown());
        $(".pub").show();
        $("#search").show();
    })
}

function shown(){
    $("#itoggle").click(function(){
        $(".header ul").show(hidden());
        $(".header ul li").show(hidden());
        $(".pub").hide();
        $("#search").hide();
    })
}
