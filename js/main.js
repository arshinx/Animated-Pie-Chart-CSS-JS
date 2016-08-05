
$(document).ready(function(){


	/* Charts */
	$('.chart').waypoint(function() {
	    $(this).easyPieChart({
	    	   barColor: '#3498db',
	    	   size: '150',
				easing: 'easeOutBounce',
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
		 });
	}, {
	  triggerOnce: true,
	  offset: 'bottom-in-view'
	});


});
