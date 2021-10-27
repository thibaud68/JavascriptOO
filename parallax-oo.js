var Parallax_elements = document.getElementsByClassName("parallax");

 
//////////////////////// 1) Pour chaque élément / objet de la liste :

for (var i = 0 ; i < Parallax_elements.length; i++) {
    
    var elem = Parallax_elements[i];
    
    // Ajout d'une propriété .scroll_factor
    
    if (elem.hasAttribute("data-scroll-factor")) {
        
        elem.scroll_factor = elem.getAttribute("data-scroll-factor");
        
    } else {
        
        elem.scroll_factor = 2;
        
    }
    
    // Ajout d'une méthode .apply_parallax()
    
    elem.apply_parallax = function() {
       
        var position_Y = this.parentNode.offsetTop;
    
        var new_mT = Math.round((window.scrollY - position_Y) / this.scroll_factor);
        
        this.style.marginTop = new_mT + "px";
        
    }
    
}

//////////////////////// 2) Pour la liste, à considérer également comme un objet :

// Ajout d'une méthode .apply_parallax_to_all() permettant un appel "groupé" de la méthode apply_parallax() de chaque élément

Parallax_elements.apply_parallax_to_all = function() {

    for (var i = 0; i < this.length; i++) {
        this[i].apply_parallax();
    }
    
}

Parallax_elements.apply_parallax_to_all = Parallax_elements.apply_parallax_to_all.bind(Parallax_elements);
// mon_Objet.une_de_ses_methodes.bind(mon_Objet) permet de garantir que dans cette méthode, le mot-clé "this" fera bien référence à mon_Objet. Selon la manière dont est appelée la méthode, cela peut ne pas être le cas.

//////////////////////// 3) Lorsque le scroll est détecté par la fenêtre, un simple appel à la méthode apply_parallax_to_all() de la liste suffit.

window.addEventListener("scroll", Parallax_elements.apply_parallax_to_all);


/////////////////////// ! \ Il manque dans cette version le traitement du second effet (parallax_on_mousemove)