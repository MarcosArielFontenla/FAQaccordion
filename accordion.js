
let acc = document.getElementsByClassName('accordion-question');
let div = document.getElementsByClassName('accordion-card');


for(let i = 0; i < acc.length; i++) {
   
    acc[i].addEventListener("click", function(i) {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;

        if(panel.style.maxHeight) {
            this.style.fontWeight = '400';
            this.style.color = 'hsl(240, 6%, 50%)';
            panel.style.maxHeight = null;
            this.children[0].style.transform = 'scaleY(1)';
        } else {
            console.log(this)
            this.style.fontWeight = '700';
            this.style.color = 'Black';
            panel.style.maxHeight = panel.scrollHeight + 'px';
            this.children[0].style.transform = 'scaleY(-1)';
        }
    });
}