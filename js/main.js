
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