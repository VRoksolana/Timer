function ShortPresent() {
    this.mode = 2;

    this.render = function() {
        var time = [];
        time = this.formatTime();

        return time[0] + ":" + time[1];
    }

    return this;
}

extend(ShortPresent, Timer);