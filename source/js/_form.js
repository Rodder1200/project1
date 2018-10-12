(function(){
    var me = {},
        requiredFields = document.querySelectorAll('[data-valid="required"]'),
        allFields = document.querySelectorAll('.contacts__item'),
        form = document.querySelector('form'),
        email = document.querySelector('[type=email]'),
        name = document.querySelector('input[type=text]'),
        msg = document.querySelector('textarea');
        

        me.alertSuccess = 'Your message has been successfully sent.';
        me.alertFail = 'All fields must be filled out';
        me.failBorderStyle = '1px solid #FA8072';
        me.successBorderStyle = '1px solid green';


    me.onLoad = function() {
        me.onSubmit();
        me.setCustomValidity();
        me.onBlur();
    }

    me.onSubmit = function() {
        form.addEventListener('submit', me.isValid);
    }

    me.setCustomValidity = function() {
        for (var i = 0; i < allFields.length; i++) {
            allFields[i].addEventListener('invalid', function(e) {
                    e.target.setCustomValidity("");
               if (!e.target.validity.valid) {
                    e.target.setCustomValidity("Please fill out this field correctly.");
                }
            });

            allFields[i].addEventListener('input', function(e) {
                    e.target.setCustomValidity("");
            });

        }
    }

    me.onBlur = function() {
        for (var i = 0; i < allFields.length; i++) {
            allFields[i].addEventListener('blur', function(e) {
                var emailTrue = royalEv.valid.isEmail(e.target.value),
                    nameTrue = royalEv.valid.isName(e.target.value),
                    msgTrue = royalEv.valid.isMsg(e.target.value);


                e.target.style.border = '';

                if ((e.target == email) && emailTrue) {
                    e.target.style.border = me.successBorderStyle;
                } else if ((e.target == name) && nameTrue) {
                    e.target.style.border = me.successBorderStyle;
                } else if ((e.target == msg) && msgTrue) {
                    e.target.style.border = me.successBorderStyle;
                } else if (e.target.value == '') {
                    e.target.style.border = '';
                } else {
                    e.target.style.border = me.failBorderStyle;
                }
            })
        }
    }

    me.isValid = function() {
        if (me.isAllCompleted(requiredFields)) {
            alert(me.alertSuccess);
            me.clearForm();
        } else {
            alert(me.alertFail);

        }
    }

    me.isAllCompleted = function(data) {
        var result = true;

        for (var i = 0; i < data.length; i++) {
            if (!royalEv.valid.isEmpty(data[i].value)) {
                result = false;
                break;
            }
        }

        if (!royalEv.valid.isEmail(email.value)) {
            result = false;
        }

        if (!royalEv.valid.isName(name.value)) {
            result = false;
        }
        
        if (!royalEv.valid.isMsg(msg.value)) {
            result = false;
        } 

        return result;
    }

    me.clearForm = function() {
         for (var i = 0; i < allFields.length; i++) {
            allFields[i].value = '';
            allFields[i].style.border = '';
        }
    }

    royalEv.formContact = me;
}());