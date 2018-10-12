(function(){
    var me = {};
    
    me.isEmail = function(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    me.isName = function(name) {
        var re = /[\wа-я]+/ig;
        return re.test(name);
    }

    me.isMsg = function(msg) {
        var re = /[\wа-я]+/ig;
        return re.test(msg);
    }

    me.isEmpty = function(str) {
        return !!str;
    }

    royalEv.valid = me;
}());