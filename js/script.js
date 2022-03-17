const app = new Vue({
    el: '#app',
    data: {
        search: ''.toLowerCase(),
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
                ],
                searchBool: false,
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
                ],
                searchBool: false,

            },
            {
                id: 2,
                name: 'samuele',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'avatar_3.jpg',
                messages: [],
                searchBool: false,

            },
            {
                id: 3,
                name: 'Alessandro B.',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'avatar_4.jpg',
                messages: [],
                searchBool: false,

            },
            {
                id: 4,
                name: 'Alessandro L.',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'avatar_5.jpg',
                messages: [],
                searchBool: false,

            },
            {
                id: 5,
                name: 'Titti',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'avatar_6.jpg',
                messages: [],
                searchBool: false,

            },
            {
                id: 6,
                name: 'Federico',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'avatar_7.jpg',
                messages: [],
                searchBool: false,
            },
            {
                id: 7,
                name: 'Davide',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'avatar_8.jpg',
                messages: [],
                searchBool: false,

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
        searchFunction() {
            this.arrFriends.forEach( (el) => {
                if(!el.name.toLowerCase().includes(this.search)) {
                    el.searchBool = true;
                } else {
                    el.searchBool = false;

                }
            })

        },
    },

})





/*

Milestone 2

Milestone 4

Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

Milestone 5

Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti

*/