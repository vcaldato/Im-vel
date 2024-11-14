//Função sem retorno (procedure)
function inicio() {
    const mensagem = 'Estou iniciando...';
    console.log(mensagem);
}

//Função com retorno
function processa() {
    const mensagem = 'Estou processando...';
    return mensagem;
}

function run() {
    inicio();


    const result = processa();

    console.log(result);
}

run();


