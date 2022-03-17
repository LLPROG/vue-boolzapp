const app = new Vue({
    el: '#app',
    data: {

        show: 'show',
        /// object to introduce 
        object: {
            message: true,
            text: '',
            timeMessage: '2020-01-10T15:50:00',
            list: false,
        },

        /// user index set on 0
        selectUserIndex: 0,
        arrFriends: [
            {
                id: 0,
                name: 'Michele',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'avatar_1.jpg',
                messages: [
                    {
                        message: true,
                        text: 'ciao',
                        timeMessage: '2020-01-10T15:50:00',
                        list: false,

                    },
                    {
                        message: false,
                        text: 'come stai',
                        timeMessage: '2020-01-10T15:50:00' ,
                        list: false,
                    },
                    {
                        message: true,
                        text: 'bene, tu?',
                        timeMessage: '2020-01-10T15:50:00' ,
                        list: false,
                    },
                ]
                
            },
            {
                id: 1,
                name: 'Fabio',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'avatar_2.jpg',
                messages: [
                    {
                        message: true,
                        text: 'ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao ciao',
                        timeMessage: '2020-01-10T15:50:00',
                        list: false,
                    },
                    {
                        message: false,
                        text: 'come stai',
                        timeMessage: '2020-01-10T15:50:00',
                        list: false,
                    },
                ]
                

            },
            {
                id: 2,
                name: 'samuele',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'avatar_3.jpg',
                messages: [],
                

            },
            {
                id: 3,
                name: 'Alessandro B.',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'avatar_4.jpg',
                messages: [],
                

            },
            {
                id: 4,
                name: 'Alessandro L.',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'avatar_5.jpg',
                messages: [],
                

            },
            {
                id: 5,
                name: 'Titti',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'avatar_6.jpg',
                messages: [],
                

            },
            {
                id: 6,
                name: 'Federico',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'avatar_7.jpg',
                messages: [],

            },
            {
                id: 7,
                name: 'Davide',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
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
            let date = luxon.DateTime.now().toISO().split('.')[0]
            this.object.timeMessage = date 
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

        getDate(date, format) {
            let formatStr = '';
            switch (format) {
                case 'italian':
                    formatStr = 'dd/MM/yyyy HH-mm-ss';
                    break;
                case 'america':
                    formatStr = 'MM/dd/yyyy HH-mm-ss';
                    break;
            }
            return luxon.DateTime.fromISO(date).toFormat(formatStr)
        },

        showHiddenList(item) {
            if(item.list == false) {
                item.list = true;
                
            } else {
                item.list = false;

            }
        },

        deleteMessage(index) {
            this.arrFriends[this.selectUserIndex].messages.splice(index, 1);
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