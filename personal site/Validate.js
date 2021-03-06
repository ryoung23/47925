(function() { 
    if (window.addEventListener) window.addEventListener("load", init, false);
    else if (window.attachEvent) window.attachEvent("onload", init);

    function init() {
        
        for(var i = 0; i < document.forms.length; i++) {
            var f = document.forms[i]; 

           
            var needsValidation = false;

            for(j = 0; j < f.elements.length; j++) {
                var e = f.elements[j];

                if (e.type != "text") continue;

                var pattern = e.getAttribute("regVal");

                if (pattern) {
                    e.onchange = validateOnChange;

                    needsValidation = true;
                }
            }
            if (needsValidation) f.onsubmit = validateOnSubmit;
        }
    }
    function validateOnChange() {
        var textfield = this;                    
        var pattern = textfield.getAttribute("regVal"); 
        var value = this.value;
        if (value.search(pattern) == -1) textfield.className = "invalid";
        else textfield.className = "valid";
    }

    function validateOnSubmit() {
        var invalid = false;
        for(var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i];
            
            if (e.type == "text" && e.onchange == validateOnChange) {
                e.onchange(); 
                if (e.className == "invalid") invalid = true;
            }
        }

        if (invalid) {
            alert("Fill out everything correctly to continue.\n");
            return false;
        }
    }
})();
