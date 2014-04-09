function DatePresent() {
		
    this.mode = 3;
	
    this.render = function() {
        var date = [];
        date = this.getDate();

        return date[0] + "/" + date[1] + "/" + date[2];
    };

    return this;
}

extend(DatePresent, Timer);