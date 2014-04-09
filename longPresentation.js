function LongPresent() {
    this.mode = 1;

    this.render = function() {
        var time = [];	
        time = this.formatTime();

        return time[0] + ":" + time[1] + ":" + time[2];
	};

    return this;
}

extend(LongPresent, Timer);