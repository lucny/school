/* Zde píšeme příkazy jazyka JavaScript 
*/
// alert('Hello world');
console.log('Funguje to');
document.title = 'Ahoj';
console.log(document.getElementById('hlavni_nadpis').style);

document.getElementById('hlavni_nadpis')
    .addEventListener('mouseenter', function(){
        // alert('No nazdar');
        document.getElementById('hlavni_nadpis').innerText = 'Můj nadpis';
        document.getElementById('hlavni_nadpis').style.color = 'red';
    });

document.getElementById('hlavni_nadpis')
    .addEventListener('mouseleave', function(){
        // alert('No nazdar');
        document.getElementById('hlavni_nadpis').innerText = 'První lekce';
        document.getElementById('hlavni_nadpis').style.color = 'black';
    });
    
document.getElementById("shrek")
        .addEventListener("mouseenter", function(){
        this.src= "img/shrek2.png";
        this.style.border = "5px solid black";
        this.style.opacity = '0.5';
        this.style.width = '50%';
    });

document.getElementById("shrek")
        .addEventListener("mouseleave", function(){
        this.src= "img/shrek1.jpg";
        this.style.border = "none";
        this.style.opacity = '1';
        this.style.width = '100%';
    });

document.getElementById('mocnina')
        .addEventListener('click', function(){
        var x = prompt('Zadej číslo');    
        document.getElementById('vysledek').innerText = Math.pow(x,2);
        /* Druhá odmocnina */ 
        //document.getElementById('vysledek').innerText = Math.pow(x,1/2);        
    });