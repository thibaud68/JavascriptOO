var Parallax_elements = document.getElementsByClassName("parallax");

//////////////////////////////////////////////////////////////////////////////////////////////////////////

for (var i = 0 ; i < Parallax_elements.length; i++) {
    
    var elem = Parallax_elements[i];
    
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    
    if (elem.hasAttribute("data-scroll-factor")) {
        elem.scroll_factor = elem.getAttribute("data-scroll-factor");
    } else {
        elem.scroll_factor = 2;
    }
    
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    
    elem.apply_parallax = function() {
       
        var position_Y = this.parentNode.offsetTop;
        var new_mT = Math.round((window.scrollY - position_Y) / this.scroll_factor);
        this.style.marginTop = new_mT + "px";
        
    }
    
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

Parallax_elements.apply_parallax_to_all = function() {

    for (var i = 0; i < this.length; i++) {
        this[i].apply_parallax();
    }
    
}

Parallax_elements.apply_parallax_to_all = Parallax_elements.apply_parallax_to_all.bind(Parallax_elements);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener("scroll", Parallax_elements.apply_parallax_to_all);