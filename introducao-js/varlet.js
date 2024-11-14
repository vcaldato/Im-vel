const exibeMensagemVar = () => {
    var msgForIF = 'Brasil';

    if (true) {
        var msgDentroIF = 'Argentina';
        console.log(msgDentroIF);
    }

    console.log( '1', msgForIF);
    console.log('2', msgDentroIF);

}

exibeMensagemVar();

const exibeMensagemlet = () => {
    let msgForIF = 'Brasil';

    if (true) {
        let msgDentroIF = 'Argentina';
        console.log(msgDentroIF);
    }

    console.log('1 ', msgForIF);
    console.log('2 ', msgDentroIF);

}

exibeMensagemlet();