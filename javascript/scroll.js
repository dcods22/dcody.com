$( window ).scroll(function(){
    var loc = $(document).scrollTop();
    var s1Top = $("#slide1").position().top - 90;
    var s2Top = $("#slide2").position().top - 90;
    var s3Top = $("#slide3").position().top - 90;
    var s4Top = $("#slide4").position().top - 90;
    var s5Top = $("#slide5").position().top - 90; 

    var s2Fade = $("#slide2").position().top - 290;
    var s3Fade = $("#slide3").position().top - 290;
    var s4Fade = $("#slide4").position().top - 290;
    var s5Fade = $("#slide5").position().top - 290;

    /*Changing of the nav*/
    if(loc < s2Top){
      $("#s1").addClass("active");
      $("#s2").removeClass("active");
      $("#s3").removeClass("active");
      $("#s4").removeClass("active");
      $("#s5").removeClass("active");
    }
    else if(loc > s2Top && loc < s3Top){
      $("#s1").removeClass("active");
      $("#s2").addClass("active");
      $("#s3").removeClass("active");
      $("#s4").removeClass("active");
      $("#s5").removeClass("active");
    }
    else if(loc > s3Top && loc < s4Top){
      $("#s1").removeClass("active");
      $("#s2").removeClass("active");
      $("#s3").addClass("active");
      $("#s4").removeClass("active");
      $("#s5").removeClass("active");
    }
    else if(loc > s4Top && loc < s5Top){
      $("#s1").removeClass("active");
      $("#s2").removeClass("active");
      $("#s3").removeClass("active");
      $("#s4").addClass("active");
      $("#s5").removeClass("active");
    }
    else if(loc > s5Top){
      $("#s1").removeClass("active");
      $("#s2").removeClass("active");
      $("#s3").removeClass("active");
      $("#s4").removeClass("active");
      $("#s5").addClass("active");
    }

    if(loc < s2Fade){
       $("#slide1 .content").fadeIn(1500);
    }
    else if(loc > s2Fade && loc < s3Fade){
       $("#slide2 .content").fadeIn(1500);
    } 
    else if(loc > s3Fade && loc < s4Fade){
       $("#slide3 .content").fadeIn(1500);
    } 
    else if(loc > s4Fade && loc < s5Fade){
       $("#slide4 .content").fadeIn(1500);
    }
    else if(loc > s5Fade){
       $("#slide5 .content").fadeIn(1500);
    }
});