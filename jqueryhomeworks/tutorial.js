/* 1va zadacha

	$(document).ready(function(){
    $('.btn1').click(function(){
    $('p').show();
    });
}); /*


 3-ta zadacha $(document).ready(function(){
    $('.btn2').click(function(){
        $('.yellow').fadeIn(200);
    });
});

  4-ta zadacha $(document).ready(function(){
    $('.btn3').click(function(){
        $('.yellow').fadeOut(200);
    });
});

 5-ta zadacha $(document).ready(function(){
    $(".btn4").hover(function(){
    $(".red").slideToggle("slow");
    });
});

6-ta zadacha $(document).ready(function(){
    $("button").click(function(){
    $("h1,h2").addclass("blue");
    });
});*/





$(document).ready(function(){

$('.Green-button').click(function(){
  $('p').fadeIn(1000);
});


$('.Red-button').click(function(){
  $('p').fadeOut(1000);
});
});
