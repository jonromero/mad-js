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
    var code = $('#code_textarea').val();
    
    try {
	eval(code);
    } catch (e) {
	result_error = 'ERROR: '+e;
	alert(result_error);
    }    
}

function convert255(data) {
    var data_0_255=[];
    for (var i=0;i<data.length;i++) {
	data_0_255[i]=128+Math.round(127*data[i]);
    }
    return data_0_255;
}

function createSample(freq, sec) {
    var samples = [];
    var length = sec * 44100; 

    for (var i=0; i < length ; i++) { 
	var t = i/length;               
	samples[i] = sin(freq * 2*PI*t); 
	samples[i] *= (1-t);                    
    }
    
    return samples;
}

function playNote(note, length) {
    var sampleRate = 44100;
    var sample = createSample(note, length);

    normalize_invalid_values(sample); // keep samples between [-1, +1]
    
    var wave = new RIFFWAVE();
    wave.header.sampleRate = sampleRate;
    wave.header.numChannels = 1;

    var audio = new Audio();
    var con_sample=convert255(sample);

    wave.Make(con_sample);
    audio.src=wave.dataURI;
    setTimeout(function() { audio.play(); }, 10); // page needs time to load?

}


$(function () {
    play();
});
 

