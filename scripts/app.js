
$( document ).ready(function() {

	    $.getJSON( "./scripts/data.json", function( data ) {
	    	for(var i = 0; i < 5; i++){
	    			$("#gas").append('<div class="blank"></div>')
	    		};
	    	for (var i =0; i <=data.elements[0].blue.length; i++){
	    		if(i == 1){
	    			$("#liquid").append('<div class="blank"></div>')
	    		};
	    		
	    		var num = data.elements[0].blue[i].atomic_number;
                var letters = data.elements[0].blue[i].abbreviation;
                var weigth = data.elements[0].blue[i].atomic_weight;
                
                $("#liquid").append('<div class="blue"><p class="at_numbers">' + num + '</p><p class="letters">' + letters +'</p><p class="at_weigth">' +weigth+ '</p></div>')
            };
	}, 'json');

    $.getJSON( "./scripts/data.json", function( data ) {
	    	for (var i = 0; i < data.elements[1].yellow.length; i++){
	    		
	    		var num = data.elements[1].yellow[i].atomic_number;
                var letters = data.elements[1].yellow[i].abbreviation;
                var weigth = data.elements[1].yellow[i].atomic_weight;
                
                $("#gas").append('<div class="yellow"><p class="at_numbers">' + num + '</p><p class="letters">' + letters +'</p><p class="at_weigth">' +weigth+ '</p></div>')
	    		
            };
	}, 'json');

	$.getJSON( "./scripts/data.json", function( data ) {
	    	for (var i =0; i < data.elements[2].pink.length; i++){
	    		var num = data.elements[2].pink[i].atomic_number;
                var letters = data.elements[2].pink[i].abbreviation;
                var weigth = data.elements[2].pink[i].atomic_weight;
                
                $("#solid").append('<div class="pink"><p class="at_numbers">' + num + '</p><p class="letters">' + letters +'</p><p class="at_weigth">' +weigth+ '</p></div>')
	    	
            };
	}, 'json');

	$.getJSON( "./scripts/data.json", function( data ) {
	    	for (var i =0; i < data.elements[3].green.length; i++){
	    		var num = data.elements[3].green[i].atomic_number;
                var letters = data.elements[3].green[i].abbreviation;
                var weigth = data.elements[3].green[i].atomic_weight;
                
                $("#neutral").append('<div class="green"><p class="at_numbers">' + num + '</p><p class="letters">' + letters +'</p><p class="at_weigth">' +weigth+ '</p></div>')
	    	
            };
	}, 'json');

	for (var x = 0; x <=18; x++){
		if(x === 0){
			$("#x_numbers").append('<div class="text"><span class="small">Group Period</span></div>');
		}
		else{
			$("#x_numbers").append('<div class="text">' + x + '</div>');
		}
		
	};

	for (var y = 1; y <=7; y++){
		$("#y_numbers").append('<div class="text">' + y + '</div>')
	}



});
