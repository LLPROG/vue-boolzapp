const app = new Vue({
    el: '#app',
    data: {
        /// loading boolean
        loading: false,

        /// online mode
        online: false,

        search: ''.toLowerCase(),
        show: 'show',
        /// object to introduce /// insert in arrFriend ?
        object: {
            message: true,
            text: '',
            timeMessage: '',
            list: false,
        },

        /// user index set on 0
        selectUserIndex: 0,
        arrFriends: [
            {
                id: 0,
                name: 'Michele',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00',
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
                openMenu: false
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
                        text: 'sei andato a mare oggi?',
                        timeMessage: '2020-01-10T15:50:00',
                        list: false,
                    },
                    {
                        message: false,
                        text: 'no sono a lavoro',
                        timeMessage: '2020-01-10T15:50:00',
                        list: false,
                    },
                ],
                searchBool: false,
                openMenu: false

            },
            {
                id: 2,
                name: 'samuele',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'avatar_3.jpg',
                messages: [],
                searchBool: false,
                openMenu: false
            },
            {
                id: 3,
                name: 'Alessandro B.',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'avatar_4.jpg',
                messages: [],
                searchBool: false,
                openMenu: false
            },
            {
                id: 4,
                name: 'Alessandro L.',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'avatar_5.jpg',
                messages: [],
                searchBool: false,
                openMenu: false
            },
            {
                id: 5,
                name: 'Titti',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'avatar_6.jpg',
                messages: [],
                searchBool: false,
                openMenu: false
            },
            {
                id: 6,
                name: 'Federico',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'avatar_7.jpg',
                messages: [],
                searchBool: false,
                openMenu: false
            },
            {
                id: 7,
                name: 'Davide',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'avatar_8.jpg',
                messages: [],
                searchBool: false,
                openMenu: false
            },
        ],
    },
    methods: {
        selectUser(index) {
            this.selectUserIndex = 0;
            this.selectUserIndex += index;
            this.object.text = '';
        },

        sendMessage() {
            let date = luxon.DateTime.now().toISO().split('.')[0]
            this.object.timeMessage = date 
            this.arrFriends[this.selectUserIndex].messages.push({...this.object});
            this.object.text = '';
            this.loading = true;
        },

        getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        },

        timeoutAnswer() {
            setTimeout(() => {
                let date = luxon.DateTime.now().toISO().split('.')[0]
                this.object.timeMessage = date 
                this.object.message = false;

                /// cit random
                let arrAnswers = [
                    'wee da quanto tempo',
                    'scusa non posso parlare al momento',
                    'ti avevo detto di non cercarmi piu',
                    'sei banale',
                    'finalmente ti fai sentire'
                ]

                this.object.text = arrAnswers[this.getRndInteger(0, arrAnswers.length  - 1)];

                this.arrFriends[this.selectUserIndex].messages.push({...this.object});

                this.object.message = true;
                this.object.text = '';

                this.function = false
                this.loading = false;
                
                this.online = true

                setTimeout(() => {
                    this.online = false
                }, 3000)
                

            }, 3000);


        },

        functions() {
            if (this.object.text != '') {
                this.sendMessage();
                this.timeoutAnswer()
            }

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

            console.log(item.list)
        },

        deleteMenuOpen() {

            if(this.arrFriends[this.selectUserIndex].openMenu == false) {
                this.arrFriends[this.selectUserIndex].openMenu = true;
                
            } else {
                this.arrFriends[this.selectUserIndex].openMenu = false;

            }

            console.log(this.arrFriends[this.selectUserIndex].openMenu)
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

        deleteAllMessages() {
            this.arrFriends[this.selectUserIndex].messages = [];
            this.arrFriends[this.selectUserIndex].openMenu = false;
        },

        deleteUser(index) {
            this.arrFriends.splice(index, 1)
        }

    },

})





/*


SUPER BONUSES

- dare la possibilità all'utente di aggiungere una nuova conversazione, inserendo in un popup il nome e il link all'icona del nuovo contatto


- fare scroll in giù in automatico fino al messaggio più recente, quando viene aggiunto un nuovo messaggio alla conversazione (NB: potrebbe esserci bisogno di utilizzare nextTick: [https://vuejs.org/v2/api/#Vue-nextTick](https://vuejs.org/v2/api/#Vue-nextTick))


- aggiungere le emoticons, tramite l'utilizzo di una libreria, ad esempio: [https://www.npmjs.com/package/vue-emoji-picker](https://www.npmjs.com/package/vue-emoji-picker)
Grafica


- visualizzare un messaggio di benvenuto che invita l'utente a selezionare un contatto dalla lista per visualizzare i suoi messaggi, anziché attivare di default la prima conversazione


- aggiungere una splash page visibile per 1s all'apertura dell'app


- A) rendere l'app responsive e fruibile anche su mobile: di default si visualizza solo la lista dei contatti e cliccando su un contatto si vedono i messaggi di quel contatto.


B) aggiungere quindi un'icona con una freccia verso sinistra per tornare indietro, dalla visualizzazione della chat alla visualizzazione di tutti i contatti

- aggiungere un'icona per ingrandire o rimpicciolire il font: dovrebbe essere sufficiente aggiungere una classe al wrapper principale

- aggiungere un'icona per cambiare la modalità light/dark: dovrebbe essere sufficiente aggiungere una classe al wrapper principale

*/