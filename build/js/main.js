jQuery(document).ready(function($) {
	/*$("#popover857913").sticky({topSpacing:10});*/
	
	console.log("hie");
	

	jQuery('#popover857913').stickyfloat( 'update',
	{
		duration : 400,  stickToBottom:true,
		
	});
	$('#myModal').modal({backdrop: 'static', keyboard: false});
    $(window).load(function(){
        $('#myModal').modal('show');
    });
 //    $("#myModal").modal('show').css({
	//     'margin-left': function () { //Horizontal centering
	//         return ($(this).width() / 2);
	//     }
	// });


	
	$('#timePicker_1').timepicker();
	$('#timePicker_2').timepicker();
	$('#timePicker_3').timepicker();
	$('#timePicker_4').timepicker();
	$('#timePicker_5').timepicker();
	$('#timePicker_6').timepicker();
	$('#timePicker_7').timepicker();
	$('#timePicker_8').timepicker();
	$('#timePicker_9').timepicker();
	$('#timePicker_10').timepicker();
	$('#timePicker_11').timepicker();
	$('#timePicker_12').timepicker();
	$('#timePicker_13').timepicker();
	$('#timePicker_14').timepicker();
	$('#timePicker_15').timepicker();
	$('#timePicker_16').timepicker();
	$('#timePicker_17').timepicker();
	$('#timePicker_18').timepicker();
	$('#timePicker_19').timepicker();
	$('#timePicker_20').timepicker();
	$('#timePicker_21').timepicker();
	$('#timePicker_22').timepicker();

	$('#datetimepicker').datetimepicker();

/*console.log($(".setting-wrapper").height() + 'height setting');*/

 $('.flagstrap').flagStrap();

 // adjuct heght on resize
  $(".side-nav").css("height", $(".setting-wrapper").height());
  $(window).on('resize', function(event) {
          console.log("hi");
          $(".side-nav").css("height", $(".setting-wrapper").height() );
   });
   // adjuct heght on tab click
   $('.nav.nav-tabs a').on('click', function(event) {
   		event.preventDefault();
   		 setTimeout(
            function() {
                
                var insideHeight = $(".setting-wrapper").height();
		   	 	//console.log( $(this) + " clicked  " + insideHeight );
		   	 	
		   		$(".side-nav").css("height", insideHeight );
            },
            100);
   });


    $('.create-anchor, .close').on('click', function  () {
        console.log('service clicked');
        $('.staff-members-sidebar').toggleClass('staff-members-sidebar-show');
        
    });
 // close Welcome  screeen
 $('.close-welcome').on('click', function(event) {
 	event.preventDefault();
 	$('.crm-listing_getting-started').hide('slow');
 });
	
});//on laod


  

