const app = new Vue({
    el: '#app',
    data: {
        function: false,
        object: {
            message: true,
            text: '',
        },
        
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
                    {
                        message: true,
                        text: 'bene, tu?'
                    },
                ]
                
            },
            {
                id: 1,
                name: 'Fabio',
                lastMessage: 'ultimo messaggio',
                timeAccess: '12.00',
                image: 'avatar_2.jpg',
                messages: [
                    {
                        message: true,
                        text: 'ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao '
                    },
                    {
                        message: false,
                        text: 'come stai'
                    },
                ]
                

            },
            {
                id: 2,
                name: 'samuele',
                lastMessage: 'ultimo messaggio',
                timeAccess: '12.00',
                image: 'avatar_3.jpg',
                messages: [],
                

            },
            {
                id: 3,
                name: 'Alessandro B.',
                lastMessage: 'ultimo messaggio',
                timeAccess: '12.00',
                image: 'avatar_4.jpg',
                messages: [],
                

            },
            {
                id: 4,
                name: 'Alessandro L.',
                lastMessage: 'ultimo messaggio',
                timeAccess: '12.00',
                image: 'avatar_5.jpg',
                messages: [],
                

            },
            {
                id: 5,
                name: 'Titti',
                lastMessage: 'ultimo messaggio',
                timeAccess: '12.00',
                image: 'avatar_6.jpg',
                messages: [],
                

            },
            {
                id: 6,
                name: 'Federico',
                lastMessage: 'ultimo messaggio',
                timeAccess: '12.00',
                image: 'avatar_7.jpg',
                messages: [],

            },
            {
                id: 7,
                name: 'Davide',
                lastMessage: 'ultimo messaggio',
                timeAccess: '12.00',
                image: 'avatar_8.jpg',
                messages: [],
                

            },
        ],
    },
    methods: {
        selectUser(index) {
            this.selectUserIndex = 0;
            this.selectUserIndex += index;
        },
        sendMessage() {
            this.function = true
            this.arrFriends[this.selectUserIndex].messages.push({...this.object});
            this.object.text = '';


        },
        timeout() {
            setTimeout(() => {
                this.object.message = false;
                this.object.text = 'ok!';

                this.arrFriends[this.selectUserIndex].messages.push({...this.object});
                
                this.object.message = true;
                this.object.text = '';
                this.function = false
            }, 1000)

        },
        functions() {
            this.sendMessage();
            this.timeout()
        },
    },
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