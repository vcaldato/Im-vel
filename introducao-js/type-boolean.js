const value1 = true;
const value2 = false;


console.log(value1 == value2);
// Thrusty / Falsy -> Variavéis vazias ou preenchidas com valores 0, se 
//submeter a uma condição booleana, ele irá avaliar se o valor e verdadeiro ou falso


//Teste lógico
if (value1) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

// O de cima vira

if (value1) console.log('Verdadeiro');

//Operador ternário
const result = value1 ? 'Verdadeiro' : 'Falso';
console.log(result);
