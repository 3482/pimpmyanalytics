         function dupeCheck(enteredVal,num){
         	
         	// Check entered values against previous entered values
         	// There should be no duplicate letters!
         	
         var combVal = ''
         	
         	// Combine all characters together. Exclude current value.
         	for(a=1;a<7;a++){
         	if(a != num)
         combVal += $('.argval'+a).val();
         	}
         	
         	return (combVal.match(enteredVal)?true:false)
         	
         	}
         
         function liveUpdate(numVal){
         	
         		// Upon change, of value, update corresponding HTML segments
          $( ".argval"+numVal ).keyup(function() {
         
          if($( ".argval"+numVal ).val().length >= 1){
          
          if(!dupeCheck($( ".argval"+numVal ).val(),numVal) ){
         	 $('.argument-'+numVal).html($( ".argval"+numVal ).val());
          }
          
          else{
         	 alert('YOU JUST ENTERED A DUPLICATE LETTER. TRY ANOTHER LETTER');
         	 }
         	 
          }
         	 
         	 else{
         	 
         	 $('.argument-'+numVal).html('i');
         	 }
         	});
         	}
         
         $(function() {
         
         
         
         // Clear all the inputs
         $( ".argval1, .argval2, .argval3, .argval4, .argval5, .argval6, .argval7" ).val('');
         
         liveUpdate(1);
         liveUpdate(2);
         liveUpdate(3);
         liveUpdate(4);
         liveUpdate(5);
         liveUpdate(6);
         liveUpdate(7);
         
         });