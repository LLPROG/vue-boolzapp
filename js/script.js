const app = new Vue({
    el: '#app',
    data: {
        now: luxon.DateTime.now().toLocaleString(),
        function: false,
        object: {
            message: true,
            text: '',
            timeMessage: luxon.DateTime.now().toLocaleString(this.now),
        },
        
        userInput: '',
        friendInput: '',
        selectUserIndex: 0,
        arrFriends: [
            {
                id: 0,
                name: 'Michele',
                lastMessage: '',
                timeAccess: luxon.DateTime.now().toLocaleString(this.now) ,
                image: 'avatar_1.jpg',
                messages: [
                    {
                        message: true,
                        text: 'ciao',
                        timeMessage: luxon.DateTime.now().toLocaleString(this.now),
                    },
                    {
                        message: false,
                        text: 'come stai',
                        timeMessage: luxon.DateTime.now().toLocaleString(this.now),
                    },
                    {
                        message: true,
                        text: 'bene, tu?',
                        timeMessage: luxon.DateTime.now().toLocaleString(this.now),
                    },
                ]
                
            },
            {
                id: 1,
                name: 'Fabio',
                lastMessage: '',
                timeAccess: luxon.DateTime.now().toLocaleString(this.now),
                image: 'avatar_2.jpg',
                messages: [
                    {
                        message: true,
                        text: 'ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ',
                        timeMessage: luxon.DateTime.now().toLocaleString(this.now),
                    },
                    {
                        message: false,
                        text: 'come stai',
                        timeMessage: luxon.DateTime.now().toLocaleString(this.now),
                    },
                ]
                

            },
            {
                id: 2,
                name: 'samuele',
                lastMessage: '',
                timeAccess: luxon.DateTime.now().toLocaleString(this.now),
                image: 'avatar_3.jpg',
                messages: [],
                

            },
            {
                id: 3,
                name: 'Alessandro B.',
                lastMessage: '',
                timeAccess: luxon.DateTime.now().toLocaleString(this.now),
                image: 'avatar_4.jpg',
                messages: [],
                

            },
            {
                id: 4,
                name: 'Alessandro L.',
                lastMessage: '',
                timeAccess: luxon.DateTime.now().toLocaleString(this.now),
                image: 'avatar_5.jpg',
                messages: [],
                

            },
            {
                id: 5,
                name: 'Titti',
                lastMessage: '',
                timeAccess: luxon.DateTime.now().toLocaleString(this.now),
                image: 'avatar_6.jpg',
                messages: [],
                

            },
            {
                id: 6,
                name: 'Federico',
                lastMessage: '',
                timeAccess: luxon.DateTime.now().toLocaleString(this.now),
                image: 'avatar_7.jpg',
                messages: [],

            },
            {
                id: 7,
                name: 'Davide',
                lastMessage: '',
                timeAccess: luxon.DateTime.now().toLocaleString(this.now),
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