(function(){
    var me = {},
        anchors = [].slice.call(document.querySelectorAll('a[href*="#"]'));
        
        me.animationTime = 500;
        me.framesCount = 100;

        me.start = anchors.forEach(function(item) {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                var coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
                var scroller = setInterval(function() {
                    var scrollBy = coordY / me.framesCount;
                      
                    if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                        window.scrollBy(0, scrollBy);
                    } else {
                        window.scrollTo(0, coordY);
                        clearInterval(scroller);
                    }
                }, me.animationTime / me.framesCount);
            });
        });
    royalEv.scroll = me;
}());