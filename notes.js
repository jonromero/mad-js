var notes = {
    var Melement = {'volume': nil,
		    'pitch': nil,
		    'duration': nil,
		    'play_fn': function () { return; },
		    'data': nil
		   }

    create: function() {
	var array_of_freqs = [];
	var samples = []

	for (var i=0; i < array_of_freqs.length; i++)
	    samples.append(createSample(array_of_freqs[i], 1));

	return samples;
    }
}