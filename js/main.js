
$('.toggle-1').click(function(e){
     $('#caption-1').slideToggle(500)
     
})
$('.toggle-2').click(function(e){
     $('.caption-2').slideToggle(500)
     
})
$('.toggle-3').click(function(e){
     $('.caption-3').slideToggle(500)
     
})
$('.toggle-4').click(function(e){
     $('.caption-4').slideToggle(500)
     
})

var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#chars").text("your available character finished");                
            }
        else{
        
        $("#chars").text(AmountLeft + ' Characyer Reamining');
        }
});

$('#openBtn').click(function(e){
     $('.side').css('width','250px')
     $('.openBtn').css('left','250px')
})
$('#closeBtn').click(function(e){
     $('.side').css('width','0px')
     $('.openBtn').css('left','0px')
})

$('.side a').click(function(e){
    let linkHref = $(e.target).attr('href')
    let sectionOffset = $(linkHref).offset().top
    $('body').animate({scrollTop:sectionOffset},500)
})

window.onload = function() {
   
    countDownToTime("21 april 2024 10:00:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }