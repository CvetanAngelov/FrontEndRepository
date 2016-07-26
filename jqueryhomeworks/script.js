$(document).ready(function(){

  $("p").hide();


  $("h1").hover(function(){

   $(this).next().slideToggle(300);

  });


});
