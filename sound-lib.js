var PI=Math.PI,
pi=Math.PI,
abs=Math.abs,
sin=Math.sin,
asin=Math.asin,
cos=Math.cos,
tan=Math.tan,
atan=Math.atan,
atan2=Math.atan2,
floor=Math.floor,
ceil=Math.ceil,
max=Math.max,
min=Math.min,
random=Math.random,
round=Math.round,
sqrt=Math.sqrt,
exp=Math.exp,
log=Math.log,
pow=Math.pow;

function normalize_invalid_values(samples) {
    for (var i=0, len=samples.length; i<len; i++) {
	if (samples[i]>1) {
	    samples[i] = 1;
	} else if (samples[i]<-1) {
	    samples[i] = -1;
	}
    }
}

function play() {
    sampleRate = 44100;
    //  var samples_length = sampleRate; // divide by 2 ???
    var samples = [] //new Float32Array(samples_length);
    
    var code = $('#code_textarea').val();
    
    try {
	eval(code);
    } catch (e) {
	result_error = 'ERROR: '+e;
	alert(result_error);
    }
    
    if (samples.length==0) {
	alert("ERROR: No values in array 'samples'");
	return;
    }
    
    normalize_invalid_values(samples); // keep samples between [-1, +1]
    
    var wave = new RIFFWAVE();
    wave.header.sampleRate = sampleRate;
    wave.header.numChannels = 1;
    var audio = new Audio();
    var samples2=convert255(samples);
    wave.Make(samples2);
    audio.src=wave.dataURI;
    setTimeout(function() { audio.play(); }, 10); // page needs time to load?
    
}

function convert255(data) {
    var data_0_255=[];
    for (var i=0;i<data.length;i++) {
	data_0_255[i]=128+Math.round(127*data[i]);
    }
    return data_0_255;
}

function playNote(note, time) {
    return noteToFreq(note, time);
}



$(function () {
    play();
});
 

