$(document).on('ready', function() {
	var map = $('.main-map');



// PART I

// Place an X on the map where clicked
	map.on('click', function(){
		var marker = $('<img class=\'marker\' src=\'images/dog.jpg \' />');
		$('.map').append(marker);
		marker.css({
			top: event.pageY - 281,
			left: event.pageX});
	});
  

// PART II
  
  // Use delegates to remove the correct marker
  $(".map").on('click', ".marker", function() {
  		$(this).remove();
  });

});