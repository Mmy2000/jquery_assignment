// $('#duration .title').click(function(){
//     $('.caption').not($(this).next()).slideUp(500);
//     $(this).next().slideToggle(500);
// });

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