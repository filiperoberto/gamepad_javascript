function Canvas(id) {
	
	this.canvasElement = document.getElementById(id);
	this.colors = ['#ECD078','#D95B43','#C02942','#542437','#53777A','#4ECDC4','#C7F464','#FF6B6B','#774F38','#E08E79','#F1D4AF','#ECE5CE','#C5E0DC','#490A3D','#BD1550','#E97F02','#F8CA00','#8A9B0F'];

	this.ctx = this.canvasElement.getContext("2d");


	this.buttonPress = function(button) {

		this.ctx.clearRect(0, 0, canvas.width, canvas.height);
		this.ctx.beginPath();
		this.ctx.fillStyle = this.colors[button%this.colors.length];
		this.ctx.arc(20,20,15,0,2*Math.PI);
		this.ctx.fill();
	}

	this.clear = function() {
		this.ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
}