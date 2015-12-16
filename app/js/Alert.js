function Alert(id) {
	
	this.alertElement = document.getElementById(id);

	this.info = function(message) {
		this.alertElement.className = "alert alert-info";
		this.alertElement.innerHTML = message;
	}

	this.error = function(message) {
		this.alertElement.className = "alert alert-danger";
		this.alertElement.innerHTML = message;
	}

	this.warn = function(message) {
		this.alertElement.className = "alert alert-warning";
		this.alertElement.innerHTML = message;
	}

	this.success = function(message) {
		this.alertElement.className = "alert alert-success";
		this.alertElement.innerHTML = message;
	}

}