import { v4 as uuidv4 } from 'uuid';

export const persona = {
    fullName: 'Mario Rossi',
    email: 'mariorossi@live.it',
    numero : '335979746',
    indirizzo: 'Via monza n.27',
    foto: `/1.jpg`,
    education: [
        {
        id: uuidv4(),
        scuola: 'Università Federico II',
        laurea: 'Scienze informatiche',
        dataInizio : '08/2020',
        dataFine: 'presente',
        città: 'Napoli, IT'
    },  {
        id: uuidv4(),
        scuola: 'Università Telematica Pegaso',
        laurea: 'Informatica per Aziende digitali',
        dataInizio : '08/2022',
        dataFine: '11/2023',
        città: ''
    }],
    esperienze: [{
        id:uuidv4(),
        azienda: 'Google',
        posizione: 'Porta Caffè',
        dataInizio : '08/2022',
        dataFine: 'presente',
        città: 'Catanzaro, IT',
        descrizione: 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.'
    },
    {
        id:uuidv4(),
        azienda: 'Apple',
        posizione: 'NDA',
        dataInizio : '08/2022',
        dataFine: '07/2023',
        città: 'Firenze, IT',
        descrizione: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }]
}