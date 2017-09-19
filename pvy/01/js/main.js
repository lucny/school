/* Zde píšeme příkazy jazyka JavaScript 
*/
// alert('Hello world');
console.log('Funguje to');
document.title = 'Ahoj';
console.log(document.getElementById('hlavni_nadpis').style);

document.getElementById('hlavni_nadpis')
    .addEventListener('mouseenter', function(){
        alert('No nazdar');
        document.getElementById('hlavni_nadpis').innerText = 'Můj nadpis';
        document.getElementById('hlavni_nadpis').style.color = 'red';
    });

