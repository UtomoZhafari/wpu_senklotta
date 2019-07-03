$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {  // not equal value or not equal type
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top 
      }, 1500, function(){   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// // event pada saat link di klik
// $('.page-scroll').on('click', function(e){

//     // ambil isi href
//     var tujuan = $(this).attr('href');
//     // tangkap elemen ybs
//     var elemenTujuan= $(tujuan);
//     // console.log(elemenTujuan.offset().top);
//     // console.log($('body').scrollTop());

//     //pindahkan scroll
//     // $('body').scrollTop(elemenTujuan.offset().top);

//     $('body').animate({
//       scrollTop: elemenTujuan.offset().top - 50
//     }, 1250, 'easeInOutExpo');

//     e.preventDefault();

// });

// $(document).ready(function(){

//   var scrollLink = $('.scroll');
//   // smooth scrolling
//   scrollLink.click(function(e){
//     $('body, html').animate({
//     scrollTop: (this.hash).offset().top
//     }, 5000);  
//   });

//   // active link switching
//   $(window).scroll(function(){
//     var scrollbarlocation = $(this).scrollTop();

//     scrollLink.each(function(){
//       var sectionOffset = $(this.hash).offset().top - 20;
      
//       if ( sectionOffset <= scrollbarLocation ) {
//         $(this).parent().addClass('active');
//         $(this).parent().siblings().removeClass('active');
//       }
//     })
//   })
// })


