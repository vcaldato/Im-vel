const inicio = () => {
    console.log('Inicio');
}

const fim = () => {
    console.log('Fim');
}

const processa = (funcao1, funcao2) => {
    funcao1();
    
    funcao2();
}

processa(inicio, fim);

processa(() => {
    console.log('funcao 1');
}, () => {
    console.log('funcao 2');
});