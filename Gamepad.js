function Gamepad() {

	var gamepad = this;
	var timer = undefined;

	this.connectedGamepad = undefined;

	function defaultFunction(e) {
		console.log(e);
	}

	this.onConnect = defaultFunction;
	this.onDisconnect = defaultFunction;
	this.onButtonPress = defaultFunction;

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
		gamepad.onButtonPress(e);
	});

	this.startListening = function() {

		var pressedButtons = {};

		timer = setInterval(function() {

			var gamepads = navigator.getGamepads();
			for(var i=0;i< gamepads.length;i++) {

				if(pressedButtons[i] === undefined) {
					pressedButtons[i] = {};
				}

				if(gamepads[i] !== undefined) {
					checkPressedButton(gamepads[i]);
				}
			}

		},100);
	}

	this.stopListening = function() {
		clearInterval(timer);
	}

	function checkPressedButton(aGamepad) {
		var pressed = aGamepad.buttons.map(function(element,index) {
				element.index = index;
				return element;
			}).filter(function(element){
				return element.pressed == true;
			}).map(function(element){
				return element.index;
			});

			for(var key in pressed) {
				var button = pressed[key];
				var buttonDownEvent = new CustomEvent("gamepadbuttondown");
				buttonDownEvent.button = button;
				buttonDownEvent.gamepad = aGamepad;
				window.dispatchEvent(buttonDownEvent);
			}
			return pressed;
	}
}