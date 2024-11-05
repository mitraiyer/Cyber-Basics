/*scrolling animation js*/
document.querySelectorAll('.nav-items a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        
        //scroll
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

/*Source: Stack Overflow*/