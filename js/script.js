$(document).ready(function() {

  // инициализирую owl carousel
  $(".owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    margin: 10
  });

  //! scroll caps
  $(window).scroll(function(){
    if (this.scrollY > 0){
      $(".header").addClass("header--scroll");
    }
    else {
      $(".header").removeClass("header--scroll");
    }
  });

  //! burger menu
  // click on the burger menu
  $('.burger-menu').on('click', function() {
    $('.burger').addClass('burger--active');
  });
  // clicking on the cross menu
  $('.cross').on('click', function(){
    $('.burger').removeClass('burger--active');
  });


  //! scrolling when clicking on header navigation elements
  $('#hero__link').on('click', function(){
    $('html,body').stop().animate({ scrollTop: $('#hero').offset().top - 100 }, 1000);
  });

  $('#location__link').on('click', function(){
    $('html,body').stop().animate({ scrollTop: $('#location').offset().top - 70 }, 1000);
  });

  $('#features__link').on('click', function(){
    $('html,body').stop().animate({ scrollTop: $('#features').offset().top - 70 }, 1000);
  });

  $('#specifications__link').on('click', function(){
    $('html,body').stop().animate({ scrollTop: $('#specifications').offset().top - 70 }, 1000);
  });

  $('#call__link').on('click', function(){
    $('html,body').stop().animate({ scrollTop: $('#call').offset().top - 70 }, 1000);
  });


  //! scrolling when clicking on burger navigation elements
  $('#hero__brln').on('click', function(){
    $('.burger').removeClass('burger--active');
    $('html,body').stop().animate({ scrollTop: $('#hero').offset().top - 70 }, 1000);
  });
  $('#location__brln').on('click', function(){
    $('.burger').removeClass('burger--active');
    $('html,body').stop().animate({ scrollTop: $('#location').offset().top - 70 }, 1000);
  });
  $('#features__brln').on('click', function(){
    $('.burger').removeClass('burger--active');
    $('html,body').stop().animate({ scrollTop: $('#features').offset().top - 70 }, 1000);
  });
  $('#specifications__brln').on('click', function(){
    $('.burger').removeClass('burger--active');
    $('html,body').stop().animate({ scrollTop: $('#specifications').offset().top - 70 }, 1000);
  });
  $('#call__brln').on('click', function(){
    $('.burger').removeClass('burger--active');
    $('html,body').stop().animate({ scrollTop: $('#call').offset().top - 70 }, 1000);
  });
  



  //! E-mail Ajax Send
/* 	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
  }); */

});