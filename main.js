window.onload = function(){

	var gamepad = new Gamepad();
	var alert = new Alert("alert");

	if(gamepad.hasSupport()){
		alert.info('This browser has support to Gamepad API!');
	}
	else {
		alert.error('This browser does not support Gamepad API');
		return;
	}

	gamepad.onConnect = function(e) {
		var name = e.gamepad.id;
		alert.success(name+" connected!");
	}

	gamepad.onDisconnect = function() {
		alert.warn('Gamepad disconnected');
	}

	gamepad.checkConnected();
}