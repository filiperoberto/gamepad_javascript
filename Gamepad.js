function Gamepad() {

	var gamepad = this;
	var timer = undefined;

	this.connectedGamepad = undefined;

	function defaultFunction(e) {
		console.log(e);
	}

	this.onConnect = defaultFunction;
	this.onDisconnect = defaultFunction;

	this.hasSupport = function() {
		return !!navigator.getGamepads;
	}

	this.checkConnected = function() {

		var firstConnected = navigator.getGamepads()[0];
		if(firstConnected !== undefined) {
			var connectedEvent = new CustomEvent("gamepadconnected");
			
			connectedEvent.gamepad = firstConnected;
			window.dispatchEvent(connectedEvent);
		}
	}

	window.addEventListener("gamepadconnected",function(e){
		gamepad.connectedGamepad = e.gamepad;
		gamepad.onConnect(e);
		gamepad.startListening();
	});
	window.addEventListener("gamepaddisconnected",function(e) {
		gamepad.onDisconnect(e);
		gamepad.stopListening();
	});

	window.addEventListener("gamepadbuttondown",function(e) {
		console.log(e);
	});

	this.startListening = function() {
		timer = setInterval(function(){

			var g = navigator.getGamepads()[0];
			var pressed = g.buttons.filter(function(element){
				return element.pressed == true;
			});

			console.log(pressed);

		},1000);
	}

	this.stopListening = function() {
		clearInterval(timer);
	}
}