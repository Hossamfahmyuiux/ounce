/* || ===

= IMKAN.com.sa
= APP FIRE

=== || */
$(document).ready(function(){
    
    // Responsive menu
    $("#menubtm").click(function(){
    $(".navbar").toggleClass("active");
    })

});


//map
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

//slider
$('.large-slick').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    rtl: true,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.small-slick'
});

$('.small-slick').slick({
     slidesToShow: 4,
     slidesToScroll: 1,
     dots: false,
    rtl: true,
     centerMode: true,
     focusOnSelect: true,
     prevArrow:"",
    nextArrow:".products-slide .next",
     asNavFor: '.large-slick',
    responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
    
 });


// prouducts tabs
$(function(){
  "use strict";
  
    $('.proudcts .tabs li a').click(function(){
      

    $('.proudcts .tabs li a').addClass('inactive');
    $(this).removeClass('inactive');
      var myId = $(this).attr("id");

        $("#proudcts .tab_contents .tabs_item").hide();
        $("#" +myId + "-content").fadeIn("1000");

    });
});


// category tabs
$(function(){
  "use strict";
  
    $('#category .tabs-hold ul li').click(function(){
      
     $(this).removeClass('inactive').siblings().addClass('inactive');
      var myId = $(this).attr("id");

        $("#category .tab_contents .tabs_item").hide();
        $("#" +myId + "-content").fadeIn("1000");

    });
});