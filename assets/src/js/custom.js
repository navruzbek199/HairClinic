// $.mask.definitions['9'] = '';
// $.mask.definitions['n'] = '[0-9]';
// $(function(){
//   $("#phone-input").mask("+998 nn nnn nn nn");
//   $("#phone-input2").mask("+998 nn nnn nn nn");
//   $("#phone-input3").mask("XXXX XXXX XXnn nnnn");
//   $("#phone-input4").mask("nn/nn");
//   $("#phone-input5").mask("nnnn");
// });
// 
// // When the user scrolls the page, execute myFunction

// (function () {
//     // Get the navbar
//     var myNavbar = document.getElementById("my_navbar");
//     var sticky = myNavbar.offsetTop;

//     // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
//     function myFunction() {
//         if (window.pageYOffset >= sticky + 100) {
//             myNavbar.classList.add("sticky");
//         } else {
//             myNavbar.classList.remove("sticky");
//         }
//     }

//     window.onload = function () {
//         myFunction();
//     };
//     window.onscroll = function () {
//         myFunction();
//     };
// })();

// var swiper = new Swiper('.swiper-container', {
//     // slidesPerView: 3,
//     // spaceBetween: 30,
//     loop: true,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     breakpoints: {
//         1024: {
//             slidesPerView: 5,
//             spaceBetween: 10,
//         },
//         576: {
//             slidesPerView: 2,
//             spaceBetween: 0,
//         },
//         414: {
//             slidesPerView: 2,
//             spaceBetween: 0,
//         },
//         375: {
//             slidesPerView: 2,
//             spaceBetween: 0,
//         }
//     },
//     autoplay: {
//         delay: 4000,
//     },
// });

// $(document).ready(function () {
//     var vid = $('.my_video').RTOP_VideoPlayer({
//         showTimer: true,
//         closeModalOnFinish: true,
//         allowReplay: true,
//         showTimer: true,
//         keyboardControls: true,
//         showControlsOnHover: true,
//         controlsHoverSensitivity: 500,
//         showCloseBtn: true,
//         allowReplay: true,
//         showFullScreen: true,
//     });
// });

// Number.prototype.format = function(n) {
//     var r = new RegExp('\\d(?=(\\d{3})+' + (n > 0 ? '\\.' : '$') + ')', 'g');
//     return this.toFixed(Math.max(0, Math.floor(n))).replace(r, '$&,');
// };

// $('.count').each(function () {
//     $(this).prop('counter', 0).animate({
//         counter: $(this).text()
//     }, {
//         duration: 10000,
//         easing: 'easeOutExpo',
//         step: function (step) {
//             $(this).text('' + step.format());
//         }
//     });
// });





function animateNumber(callback, from, to, duration) {
    let start = null,
      animate = timestamp => {
        start = start || timestamp;
        let progress = Math.min((timestamp - start) / duration, 1);
        callback(progress * (to - from) + from);
        if(progress < 1) {
          window.requestAnimationFrame(animate);
        }
      };
    window.requestAnimationFrame(animate);
  }
  
  animateNumber(value => {
    document.querySelector('.count1').textContent = Math.floor(value);
  }, 0, 97, 15000);


  function animateNumber(callback, from, to, duration) {
    let start = null,
      animate = timestamp => {
        start = start || timestamp;
        let progress = Math.min((timestamp - start) / duration, 1);
        callback(progress * (to - from) + from);
        if(progress < 1) {
          window.requestAnimationFrame(animate);
        }
      };
    window.requestAnimationFrame(animate);
  }
  
  animateNumber(value => {
    document.querySelector('.count2').textContent = Math.floor(value);
  }, 0, 10, 15000);



  function animateNumber(callback, from, to, duration) {
    let start = null,
      animate = timestamp => {
        start = start || timestamp;
        let progress = Math.min((timestamp - start) / duration, 1);
        callback(progress * (to - from) + from);
        if(progress < 1) {
          window.requestAnimationFrame(animate);
        }
      };
    window.requestAnimationFrame(animate);
  }
  
  animateNumber(value => {
    document.querySelector('.count3').textContent = Math.floor(value);
  }, 0, 80, 15000);



  function animateNumber(callback, from, to, duration) {
    let start = null,
      animate = timestamp => {
        start = start || timestamp;
        let progress = Math.min((timestamp - start) / duration, 1);
        callback(progress * (to - from) + from);
        if(progress < 1) {
          window.requestAnimationFrame(animate);
        }
      };
    window.requestAnimationFrame(animate);
  }
  
  animateNumber(value => {
    document.querySelector('.count4').textContent = Math.floor(value);
  }, 0, 20, 15000);





  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 2,
    loop: true,
    speed: 300,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    }
  });




  var swiper = new Swiper(".mySwiper1", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });





  $('#nav-icon1').on('click', function(){
    $(this).toggleClass('open');
    $('.hamburger-menu').toggleClass("active");
    
  });
  
  $('.hamburger-menu li').on('click', function(){
    $('.hamburger-menu').removeClass('active')
    $('#nav-icon1').removeClass('open')
  });



  
new WOW().init();




$('#closemodal').click(function() {
  $('#myModal').modal('hide');
});


// $(document).ready(function () {
//   $('img').on('click', function () {
//       var image = $(this).attr('src');
//       $('#myModal1').on('show.bs.modal', function () {
//           $(".img-responsive").attr("src", image);
//       });
//   });
// });




$.mask.definitions['9'] = '';
$.mask.definitions['n'] = '[0-9]';
$(function(){
  $(".phone-input").mask("+998 nn nnn nn nn");
  // $("#phone-input2").mask("+998 nn nnn nn nn");
  // $("#phone-input3").mask("XXXX XXXX XXnn nnnn");
  // $("#phone-input4").mask("nn/nn");
  // $("#phone-input5").mask("nnnn");
});


$('#closeBtn').click(function() {
  $('#myModal').modal('hide');
});