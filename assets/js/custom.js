try {
	var $ = window.jQuery;
	$(document).ready(function() {
		// init Isotope
		var $grid = $('.kbo-grid').isotope({
		  itemSelector: '.kbo-element-item',
		  layoutMode: 'fitRows',
		  getSortData: {
		    category: '[data-category]',
		  }
		});
		$('#filters').on( 'click', 'button', function() {
		  var filterValue = $( this ).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});
		$('.kbo-button-group').each( function( i, buttonGroup ) {
		  var $buttonGroup = $( buttonGroup );
		  $buttonGroup.on( 'click', 'button', function() {
		    $buttonGroup.find('.is-checked').removeClass('is-checked');
		    $( this ).addClass('is-checked');
		  });
		});

		//init flexslider
		$('#kboTestimonials').flexslider({
		    animation: "slide"
		});
	});
	
} catch (err) {
	console.log('ERROR:' + err);
}