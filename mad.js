var mad = {
    var Melement = {'volume': nil,
		    'pitch': nil,
		    'duration': nil,
		    'play_fn': function () { return; },
		    'data': nil
		   }

    play: function(elements) {
	_.each(elements, function(element) {
	    play_element(element);
	    wait(element.duration);
	});
    }
}