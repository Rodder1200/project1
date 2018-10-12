(function(){
	var me = {},
		next = document.querySelector('#testiNext'),
		prev = document.querySelector('#testiPrev'),
		quotes = document.querySelectorAll('.testi__quote'),
		item = document.querySelector('.testi__item'),
		image = document.querySelector('.testi__image'),
		author = document.querySelectorAll('.testi__author');
		
		me.bgs = [ "#fff url('./images/testi_item_image.png') center/cover no-repeat",
				"#fff url('./images/jobs.png') center/cover no-repeat",
				"#fff url('./images/gates.png') center/cover no-repeat",
				"#fff url('./images/zuckerberg.png') center/cover no-repeat",
				"#fff url('./images/bezos.png') center/cover no-repeat"];
		me.counter = 0;		

	me.goNextTesti = function() {
		next.addEventListener('click', function() {
			if (me.counter < quotes.length-1) {
				quotes[me.counter].style.display = 'none';
				author[me.counter].style.display = 'none';
				quotes[me.counter+1].style.display = 'block';
				author[me.counter+1].style.display = 'block';
				image.style.background = me.bgs[me.counter+1];
				me.counter++;
			} else {
				quotes[quotes.length-1].style.display = 'none';
				author[author.length-1].style.display = 'none';
				me.counter = 0;
				quotes[me.counter].style.display = 'block';
				author[me.counter].style.display = 'block';
				image.style.background = me.bgs[me.counter];
			}
		});
	}

	me.goPrevTesti = function() {
		prev.addEventListener('click', function() {
			if (me.counter > 0) {
				quotes[me.counter].style.display = 'none';
				author[me.counter].style.display = 'none';
				quotes[me.counter-1].style.display = 'block';
				author[me.counter-1].style.display = 'block';
				image.style.background = me.bgs[me.counter-1];
				me.counter--;
			} else {
				quotes[me.counter].style.display = 'none';
				author[me.counter].style.display = 'none';
				me.counter = 4;
				quotes[quotes.length-1].style.display = 'block';
				author[quotes.length-1].style.display = 'block';
				image.style.background = me.bgs[quotes.length-1];
			}	
		});
	}

	royalEv.testi = me;
}());