function ViewTimer($element) {
    var timer;

	startShowTimer();

	function startShowTimer() {
		timer = new Timer();		
		timer = new LongPresent();
		setInterval(changeTimer, 1000);

		addEventListeners($element);
	}

	function changeTimer() {
		timer.startTimer();
		$element.html(timer.render());
	}

	function addEventListeners($element) {
		$element.on("click", handingMouseClick);
		$element.on("contextmenu", handingContextmenuOff);		
	}
	
	function handingMouseClick(e) {	
		if(e.which == 1) {
			if(timer.mode == 1) {
				timer = new ShortPresent();
			} else if(timer.mode == 2) {
                timer = new LongPresent();
			}
		}
	}
	
	function handingContextmenuOff(e) {
		e.preventDefault();
		if(timer.mode == 1) {
			timer = new DatePresent();
		} else if(timer.mode == 3) {
               timer = new LongPresent();
		}
	}	
	
	return this;
}
