var Timer = (function() {
	function constructor() {
		var hours,
			minutes,
 		seconds,
    		day,
			month, 
		year;    	

		return this;
	}

	constructor.prototype.startTimer = function() {
		var today;
		
		today = new Date();
		hours = today.getHours();
		minutes = today.getMinutes();
		seconds = today.getSeconds(); 
		day = today.getDate(); 
		month = today.getMonth() + 1; 
		year = today.getYear() + 1900;
	};

	constructor.prototype.mode = "";

	constructor.prototype.formatTime = function() {
		var time = [];

		time.push(checkTime(hours));
		time.push(checkTime(minutes));
		time.push(checkTime(seconds));

		return time;
	};

	function checkTime(number) {
		return (number < 10)? ("0" + number): number;
	}

	constructor.prototype.render = function() {};

	constructor.prototype.getDate = function() {
		var date = [];

		date.push(day);		
		date.push(month);
		date.push(year);

		return date; 
	};

	return constructor;
})();