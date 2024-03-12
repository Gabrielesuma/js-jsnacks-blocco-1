let frigo = [
    'banana',
    'mela',
    'pera',
    'ciliegia',
    'arancia',
    'mandarino',
    'cocomero',
    'limone',
    'fragola'
]
frigo.push('pesca');
console.log(frigo);

let trovato = false;

for(i = 0; i < frigo.length; i++){
    if(frigo[i] === 'cocomero'){
        trovato = true
    }
}
if(trovato){
    console.log('Trovato! Devo solo preparare il cocktail.');
} else {
    console.log('Oh no, devo uscire a comprare il cocomero!');
}