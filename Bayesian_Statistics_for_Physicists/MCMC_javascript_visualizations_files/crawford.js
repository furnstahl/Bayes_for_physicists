(function($) {
    "use strict"; 
    $(function() {    		
    	// primary navigation
		$('header nav li:last-child, article:last').addClass('last');
		dropDown();	
		$(window).resize(function() {
			dropDown();
		});						
		function dropDown() {
			var winWidth = $(window).width();
			if (winWidth > 768) {
				$('header nav .menu-item-has-children').hover(
					function() {
				    	$(this).find('ul').fadeIn('fast');
					}, function() {
				    	$(this).find('ul').fadeOut('fast');
				  }
				);	
			}	
		}
 	}); 
}(jQuery));