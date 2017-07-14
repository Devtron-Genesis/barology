(function() {

    "use strict";

    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        if(this.classList.contains("is-active") === true) {
          this.classList.remove("is-active");
          $('#menu-div').hide(500);
        }else {
          this.classList.add("is-active");
          $('#menu-div').show(500);
        }
      });
    }

  })();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});
  $('#slide-2').waypoint(function() {
    $('.first_sect').addClass('magictime slideLeftRetourn');
    $('.second_sect').addClass('magictime slideLeftRetourn');
    $('.third_sect').addClass('magictime slideLeftRetourn');
  }, {
    offset: '75%'
  });
 

  $('#why-us').waypoint(function() {
    $('#why-us img').addClass('magictime slideLeftRetourn');
    $('#why-us').addClass('magictime slideLeftRetourn');
  }, {
    offset: '75%'
  });

    $('#contactus-sect').waypoint(function() {
    $('#contactus').addClass('magictime sslideRightRetourn');
  }, {
    offset: '20%'
  });

  $('#news-sect').waypoint(function() {
    $('#news-sec').addClass('magictime slideLeftRetourn');
  }, {
    offset: '20%'
  });


  $('#whowe-sect').waypoint(function() {
    $('#whowe-sect').addClass('magictime slideLeftRetourn');
    $('#whoweare-sect').addClass('magictime slideLeftRetourn');
  }, {
    offset: '20%'
  });

  $('#shop-now').waypoint(function() {
    $('#fertidiv-1').addClass('magictime slideLeftRetourn');
    $('#fertidiv-2').addClass('magictime slideLeftRetourn');
    $('#fertidiv-3').addClass('magictime slideLeftRetourn');
    $('#fertidiv-4').addClass('magictime slideLeftRetourn');
  }, {
    offset: '75%'
  });

    $('#about-sect').waypoint(function() {
    $('.about-img').addClass('magictime slideLeftRetourn');
    $('.about-us-text').addClass('magictime slideLeftRetourn');
  }, {
    offset: '75%'
  });
setTimeout(function(){
    $('.logo-div').addClass('magictime swashIn');
    $('.heading-home').addClass('magictime swashIn');
    $('.heading-home1').addClass('magictime swashIn');

}, 3000);



$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

    $(".demo2").bootstrapNews({
            newsPerPage: 2,
            autoplay: true,
      pauseOnHover: true,
      navigation: false,
            direction: 'down',
            newsTickerInterval: 2500,
            onToDo: function () {
                //console.log(this);
            }
        });

$('a[data-slide="prev"]').click(function() {
  $('#carousel-ferti').carousel('prev');
});

$('a[data-slide="next"]').click(function() {
  $('#carousel-ferti').carousel('next');
});

$("#menu-div li a").click(function() {
  $("#menu-div li").removeClass('selected');
    $(this).parent().addClass('selected');
});