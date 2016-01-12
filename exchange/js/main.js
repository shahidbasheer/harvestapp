jQuery(document).ready(function($) {
	$(".due-del-step-2 ul.tabs").width($("ul.frames a").outerWidth()-1);	
	
	$(window).resize(function() {
	console.log('resized');
		$(".due-del-step-2 ul.tabs").width($("ul.frames a").outerWidth()-1);
           
        });
	//right side bar 

	 $('.loan-application .close').on('click', function(event) {
	 	event.preventDefault();
	 	$('.loan-application').toggleClass('loan-application-show');
	 	
	 });

	 $('.app').on('click', function  () {
        console.log('service clicked');
        $('.loan-application').toggleClass('loan-application-show');
        
    });


	 $('.bid').on('click', function  () {
        console.log('service clicked');
        $('.loan-application-2').toggleClass('loan-application-show-2');
        
    });
	 $('.loan-application-2 .close').on('click', function(event) {
	 	event.preventDefault();
	 	$('.loan-application-2').toggleClass('loan-application-show-2');
	 });
	
});