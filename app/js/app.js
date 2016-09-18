$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a, .lead a, .down-arrow").on('click', function(event) {
    // Prevent default anchor click behavior
    event.preventDefault();
    // Store hash
    var hash = this.hash;
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1100, function(){
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
  
  // Offset for Main Navigation
  $('#mainNav').affix({
    offset: {
      top: 505
    }
  });
  
  var circle1 = $('#html');
  var html = {
    animation: 1,
    animationStep: 15,
    foregroundBorderWidth: 7,
    backgroundBorderWidth: 3,
    foregroundColor: '#ff8b00',
    percent: 100,
    text: 'HTML',
    textSize: 24,
    textStyle: 'font-size: 16px;',
    textColor: '#ff8b00',
  };
  var htmli = {
    animation: 1,
    animationStep: 10,
    foregroundBorderWidth: 7,
    backgroundBorderWidth: 3,
    percent: 0,
    showPercent: 1,
    text: 'HTML',
    textSize: 0,
    textStyle: 'font-size: 16px;',
    textColor: '#ff8b00',
  };
  circle1.circliful(htmli);
  circle1.hover(
    function(){
      $('#html').find('.circliful').first().hide();
      circle1.circliful(html).fadeOut(1).fadeIn(200);
    },
    function(){
      $('#html').find('.circliful').remove();
      circle1.circliful(htmli).fadeOut(1).fadeIn(200);
    }
  );
  
  var circle2 = $('#css');
  var css = {
    animation: 1,
    animationStep: 15,
    foregroundBorderWidth: 7,
    backgroundBorderWidth: 3,
    foregroundColor: '#ff8b00',
    percent: 90,
    text: 'CSS',
    textSize: 24,
    textStyle: 'font-size: 16px;',
    textColor: '#ff8b00',
  };
  var cssi = {
    animation: 1,
    animationStep: 15,
    foregroundBorderWidth: 7,
    backgroundBorderWidth: 3,
    foregroundColor: '#ff8b00',
    percent: 0,
    text: 'CSS',
    textSize: 0,
    textStyle: 'font-size: 16px;',
    textColor: '#ff8b00',
  };
  circle2.circliful(cssi);
  circle2.hover(
    function(){
      $('#css').find('.circliful').first().hide();
      circle2.circliful(css).fadeOut(1).fadeIn();
    },
    function(){
      $('#css').find('.circliful').remove();
      circle2.circliful(cssi).fadeOut(1).fadeIn();
    }
  );
  
  var circle3 = $('#js');
  var js = {
    animation: 1,
    animationStep: 15,
    foregroundBorderWidth: 7,
    backgroundBorderWidth: 3,
    foregroundColor: '#ff8b00',
    percent: 65,
    text: 'JavaScript',
    textSize: 24,
    textStyle: 'font-size: 16px;',
    textColor: '#ff8b00',
  };
  var jsi = {
    animation: 1,
    animationStep: 15,
    foregroundBorderWidth: 7,
    backgroundBorderWidth: 3,
    foregroundColor: '#ff8b00',
    percent: 0,
    text: 'JavaScript',
    textSize: 0,
    textStyle: 'font-size: 16px;',
    textColor: '#ff8b00',
  };
  circle3.circliful(jsi);
  circle3.hover(
    function(){
      $('#js').find('.circliful').first().hide();
      circle3.circliful(js).fadeOut(1).fadeIn();
    },
    function(){
      $('#js').find('.circliful').remove();
      circle3.circliful(jsi).fadeOut(1).fadeIn();
    }
  );
  
  var circle4 = $('#ps');
  var ps = {
    animation: 1,
    animationStep: 15,
    foregroundBorderWidth: 7,
    backgroundBorderWidth: 3,
    foregroundColor: '#ff8b00',
    percent: 70,
    text: 'Photoshop',
    textSize: 24,
    textStyle: 'font-size: 16px;',
    textColor: '#ff8b00',
  };
  var psi = {
    animation: 1,
    animationStep: 15,
    foregroundBorderWidth: 7,
    backgroundBorderWidth: 3,
    foregroundColor: '#ff8b00',
    percent: 0,
    text: 'Photoshop',
    textSize: 0,
    textStyle: 'font-size: 16px;',
    textColor: '#ff8b00',
  };
  circle4.circliful(psi);
  circle4.hover(
    function(){
      $('#ps').find('.circliful').first().hide();
      circle4.circliful(ps).fadeOut(1).fadeIn();
    },
    function(){
      $('#ps').find('.circliful').remove();
      circle4.circliful(psi).fadeOut(1).fadeIn();
    }
  );
  
  var circle5 = $('#ai');
  var ai = {
    animation: 1,
    animationStep: 15,
    foregroundBorderWidth: 7,
    backgroundBorderWidth: 3,
    foregroundColor: '#ff8b00',
    percent: 75,
    text: 'Illustrator',
    textSize: 24,
    textStyle: 'font-size: 16px;',
    textColor: '#ff8b00',
  };
  var aii = {
    animation: 1,
    animationStep: 15,
    foregroundBorderWidth: 7,
    backgroundBorderWidth: 3,
    foregroundColor: '#ff8b00',
    percent: 0,
    text: 'Illustrator',
    textSize: 0,
    textStyle: 'font-size: 16px;',
    textColor: '#ff8b00',
  };
  circle5.circliful(aii);
  circle5.hover(
    function(){
      $('#ai').find('.circliful').first().hide();
      circle5.circliful(ai).fadeOut(1).fadeIn();
    },
    function(){
      $('#ai').find('.circliful').remove();
      circle5.circliful(aii).fadeOut(1).fadeIn();
    }
  );
  
  var circle6 = $('#circle6');
  var par = {
    animation: 1,
    animationStep: 15,
    foregroundBorderWidth: 7,
    backgroundBorderWidth: 3,
    foregroundColor: '#ff8b00',
    percent: 80,
    text: 'Git',
    textSize: 24,
    textStyle: 'font-size: 16px;',
    textColor: '#ff8b00',
  };
  var inicial = {
    animation: 1,
    animationStep: 15,
    foregroundBorderWidth: 7,
    backgroundBorderWidth: 3,
    foregroundColor: '#ff8b00',
    percent: 0,
    text: 'Git',
    textSize: 0,
    textStyle: 'font-size: 16px;',
    textColor: '#ff8b00',
  };
  circle6.circliful(inicial);
  circle6.hover(
    function(){
      $('#circle6').find('.circliful').first().hide();
      circle6.circliful(par).fadeOut(1).fadeIn();
    },
    function(){
      $('#circle6').find('.circliful').remove();
      circle6.circliful(inicial).fadeOut(1).fadeIn();
    }
  );
  
});