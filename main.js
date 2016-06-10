/*
*	
*	Description: Prototype app for microspot mobile communication.
*	by Jaime Garcia Villena "unautomatico@gmail.com"
*
*/




var dataLabel = ui.addText("data : ",10, 20, 500, 100);

var serial; 

//start connexion with arduino
ui.addButton("START", 50, 50, 600,100).onClick(function() { 
	
	//show arduino incoming data
    serial = boards.connectSerial(115200, function(connected) {
    	console.log("connected " + connected);
	});

	serial.onNewData(function(data) {
		dataLabel.setText("Data : "+ data);
		console.log(data);
		media.textToSpeech("tick"); 
	});

});


//write to the serial led on
ui.addButton("HOME AXIS", 50, 150, 600,100).onClick(function(){ 
	serial.write("$h\r\n"); 
});

ui.addButton("X-", 240, 400, 100,100).onClick(function(){
	serial.write("ledoff");
});

ui.addButton("X+", 380, 400, 100,100).onClick(function(){
	serial.write("ledoff");
});

ui.addButton("Y+", 310, 300, 100,100).onClick(function(){
	serial.write("ledoff");
});

ui.addButton("Y-", 310, 500, 100,100).onClick(function(){
	serial.write("ledoff");
});

ui.addButton("STOP", 50, 600, 600,100).onClick(function(){
	serial.stop(); 
});

var camera = ui.addCameraView("back", 0, 700, 360, 480);
