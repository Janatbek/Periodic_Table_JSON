
$( document ).ready(function() {

	     $.getJSON( "./assets/scripts/data.json", function( data ) {
//Object constructor for my objects	    		
			function table(array) {
	    		this.array = array;
	    	}
			var blue = new table(data.elements[0].blue).array;
			var yellow = new table(data.elements[1].yellow).array;
			var pink = new table(data.elements[2].pink).array;
			var green = new table(data.elements[3].green).array;

//BLANK cells
	    	for(var i = 0; i < 5; i++){
	    			$("#gas").append('<div class="blank"></div>')
	    		};
//BLUE cells
	    	for (var i = 0; i < blue.length; i++){
	    		if(i == 1){
	    			$("#liquid").append('<div class="blank"></div>')
	    		};
	    		console.log(blue)
	    		var num = blue[i].atomic_number;
                var letters = blue[i].abbreviation;
                var weigth = blue[i].atomic_weight;
                
                $("#liquid").append('<div class="blue"><p class="at_numbers">' + num + '</p><p class="letters">' + letters +'</p><p class="at_weigth">' +weigth+ '</p></div>')
            };
//YELLOW cells
            for (var i = 0; i < yellow.length; i++){
	    		var num = yellow[i].atomic_number;
                var letters = yellow[i].abbreviation;
                var weigth = yellow[i].atomic_weight;
                
                $("#gas").append('<div class="yellow"><p class="at_numbers">' + num + '</p><p class="letters">' + letters +'</p><p class="at_weigth">' +weigth+ '</p></div>')
	    	};

// PINK cells
	    	for (var i =0; i < pink.length; i++){
	    		var num = pink[i].atomic_number;
                var letters = pink[i].abbreviation;
                var weigth = pink[i].atomic_weight;
                
                $("#solid").append('<div class="pink"><p class="at_numbers">' + num + '</p><p class="letters">' + letters +'</p><p class="at_weigth">' +weigth+ '</p></div>')
	    	
            };
//GREEN cells
            for (var i =0; i < green.length; i++){
	    		var num = green[i].atomic_number;
                var letters = green[i].abbreviation;
                var weigth = green[i].atomic_weight;
                
                $("#neutral").append('<div class="green"><p class="at_numbers">' + num + '</p><p class="letters">' + letters +'</p><p class="at_weigth">' +weigth+ '</p></div>')
	    	
            };

	}, 'json');   //JSON call ends here
	     	     
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

});	//end of jQuery ready function.
