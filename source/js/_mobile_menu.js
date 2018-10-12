(function() {
	var me = {},
	 	button = document.querySelector('.nav_button');

	 	nav = document.querySelector('.nav');

	 	me.open = function() {
	 		button.addEventListener('click', function(){
	 			nav.classList.toggle('nav_show');

	 			if (nav.className == 'nav nav_show') {
			 		nav.addEventListener('click', function(){
			 			nav.classList.remove('nav_show');
			 		});
		 		}
	 		});
	 	}

	 	royalEv.mobile = me;
})();