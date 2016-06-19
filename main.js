/*
*	
*	Description: Prototype app for microspot mobile communication.
*	by Jaime Garcia Villena "unautomatico@gmail.com"
*
*/


var camera = ui.addCameraView("back", 0, 0, 0.5, 0.375);

var arduino

//start connexion with arduino
ui.addButton("START", 0.0, 0.61, 0.5,0.07).onClick(function() { 
    arduino= boards.connectArduino(115200, "\r\n", function(connected) {
    	console.log("connected " + connected);
	});
});

ui.addButton("HOME AXIS", 0.0, 0.68, 0.5,0.07).onClick(function(){ 
	serial.write("$h\r\n"); 
	console.log("ok");
});


ui.addButton("STOP", 0.00, 0.75, 0.5, 0.07).onClick(function(){
	serial.stop(); 
});


ui.addButton("X-", 0.6, 0.68, 0.14,0.07).onClick(function(){
	serial.write("G91\r\n");
	serial.write("G1 X-5 F1000");
});

ui.addButton("X+", 0.8, 0.68, 0.14,0.07).onClick(function(){
	serial.write("G91\r\n");
	serial.write("G1 X5 F1000");
});

ui.addButton("Y+", 0.7, 0.63, 0.14,0.07).onClick(function(){
	serial.write("G91\r\n");
	serial.write("G1 Y5 F1000");
});

ui.addButton("Y-", 0.7, 0.73, 0.14,0.07).onClick(function(){
	serial.write("G91\r\n");
	serial.write("G1 Y-5 F1000");
});

