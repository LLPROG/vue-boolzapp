const app = new Vue({
    el: '#app',
    data: {
        userValue: '',
        userInput: '',
        friendInput: '',
        selectUserIndex: 0,
        arrFriends: [
            {
                id: 0,
                name: 'Michele',
                lastMessage: 'ultimo messaggio',
                timeAccess: '12.00',
                image: 'avatar_1.jpg',
                messages: [
                    {
                        message: true,
                        text: 'ciao'
                    },
                    {
                        message: false,
                        text: 'come stai'
                    },
                ]
                
            },
            {
                id: 1,
                name: 'Fabio',
                lastMessage: 'ultimo messaggio',
                timeAccess: '12.00',
                image: 'avatar_2.jpg',
                

            },
            {
                id: 2,
                name: 'samuele',
                lastMessage: 'ultimo messaggio',
                timeAccess: '12.00',
                image: 'avatar_3.jpg',
                

            },
            {
                id: 3,
                name: 'Alessandro B.',
                lastMessage: 'ultimo messaggio',
                timeAccess: '12.00',
                image: 'avatar_4.jpg',
                

            },
            {
                id: 4,
                name: 'Alessandro L.',
                lastMessage: 'ultimo messaggio',
                timeAccess: '12.00',
                image: 'avatar_5.jpg',
                

            },
            {
                id: 5,
                name: 'Titti',
                lastMessage: 'ultimo messaggio',
                timeAccess: '12.00',
                image: 'avatar_6.jpg',
                

            },
            {
                id: 6,
                name: 'Federico',
                lastMessage: 'ultimo messaggio',
                timeAccess: '12.00',
                image: 'avatar_7.jpg',

            },
            {
                id: 7,
                name: 'Davide',
                lastMessage: 'ultimo messaggio',
                timeAccess: '12.00',
                image: 'avatar_8.jpg',
                

            },
        ],
    },
    methods: {
        selectUser(index) {
            this.selectUserIndex = 0;
            this.selectUserIndex += index;
        },
        sendMessage() {
            this.userInput = this.userValue;
            this.userValue = '';

            if (this.userInput != '') {
                this.friendInput = 'si tanto!'
            }
        }
    }
})





/*

Milestone 2

Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato

Milestone 3

Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
Consiglio
Pensate bene a come strutturare i dati prima di implementare il codice.

*/