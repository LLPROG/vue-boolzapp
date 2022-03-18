const app = new Vue({
    el: '#app',
    data: {

        return: {
            count: 5
          },

        /// object for new contact
        newContact: {
            id: 0,
            name: '',
            lastMessage: '',
            timeAccess: '',
            image: '',
            messages: [],
            searchBool: false,
            openMenu: false,
            openMenu: false,
            /// loading boolean
            loading: false,
            /// online mode
            object: {
                message: true,
                text: '',
                timeMessage: '',
                list: false,
            }
        },

        newContactBool: false,
        popupBool: false,

        search: ''.toLowerCase(),
        show: 'show',

        /// user index set on 0
        selectUserIndex: 0,
        arrFriends: [
            {
                id: 0,
                name: 'Michele',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00',
                image: 'img/avatar_1.jpg',
                messages: [
                    {
                        message: true,
                        text: 'ciao ',
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
                openMenu: false,
                /// loading boolean
                loading: false,
                /// online mode
                online: false,

                object: {
                    message: true,
                    text: '',
                    timeMessage: '',
                    list: false,
                }
            },
            {
                id: 1,
                name: 'Fabio',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'img/avatar_2.jpg',
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
                openMenu: false,
                /// loading boolean
                loading: false,
                /// online mode
                online: false,
                object: {
                    message: true,
                    text: '',
                    timeMessage: '',
                    list: false,
                }
            },
            {
                id: 2,
                name: 'samuele',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'img/avatar_3.jpg',
                messages: [],
                searchBool: false,
                openMenu: false,
                /// loading boolean
                loading: false,
                /// online mode
                online: false,
                object: {
                    message: true,
                    text: '',
                    timeMessage: '',
                    list: false,
                }
    
            },
            {
                id: 3,
                name: 'Alessandro B.',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'img/avatar_4.jpg',
                messages: [],
                searchBool: false,
                openMenu: false,
                /// loading boolean
                loading: false,
                /// online mode
                online: false,
                object: {
                    message: true,
                    text: '',
                    timeMessage: '',
                    list: false,
                }
            },
            {
                id: 4,
                name: 'Alessandro L.',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'img/avatar_5.jpg',
                messages: [],
                searchBool: false,
                openMenu: false,
                /// loading boolean
                loading: false,
                /// online mode
                online: false,
                object: {
                    message: true,
                    text: '',
                    timeMessage: '',
                    list: false,
                }
            },
            {
                id: 5,
                name: 'Titti',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'img/avatar_6.jpg',
                messages: [],
                searchBool: false,
                openMenu: false,
                /// loading boolean
                loading: false,
                /// online mode
                online: false,
                object: {
                    message: true,
                    text: '',
                    timeMessage: '',
                    list: false,
                }
            },
            {
                id: 6,
                name: 'Federico',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'img/avatar_7.jpg',
                messages: [],
                searchBool: false,
                openMenu: false,
                /// loading boolean
                loading: false,
                /// online mode
                online: false,
                object: {
                    message: true,
                    text: '',
                    timeMessage: '',
                    list: false,
                }
            },
            {
                id: 7,
                name: 'Davide',
                lastMessage: '',
                timeAccess: '2020-01-10T15:50:00' ,
                image: 'img/avatar_8.jpg',
                messages: [],
                searchBool: false,
                openMenu: false,
                /// loading boolean
                loading: false,
                /// online mode
                online: false,
                object: {
                    message: true,
                    text: '',
                    timeMessage: '',
                    list: false,
                }
            },
        ],
    },
    methods: {
        selectUser(index) {
            this.selectUserIndex = 0;
            this.selectUserIndex += index;
        },

        sendMessage() {
            let element = this.arrFriends[this.selectUserIndex];

            if (element.object.text != '') {
                let date = luxon.DateTime.now().toISO().split('.')[0]
                element.object.timeMessage = date 
                element.messages.push({...element.object});
                element.object.text = '';
                element.loading = true;
                this.timeoutAnswer(this.selectUserIndex)
            }
        },
        
        timeoutAnswer(chatIndex) {
            setTimeout(() => {
                let element = this.arrFriends[chatIndex];

                let date = luxon.DateTime.now().toISO().split('.')[0]
                element.object.timeMessage = date 
                element.object.message = false;

                /// cit random
                let arrAnswers = [
                    'wee da quanto tempo',
                    'scusa non posso parlare al momento',
                    'ti avevo detto di non cercarmi piu',
                    'sei banale',
                    'finalmente ti fai sentire'
                ]

                element.object.text = arrAnswers[this.getRndInteger(0, arrAnswers.length  - 1)];

                element.messages.push({...element.object});

                element.object.message = true;
                element.object.text = '';

                // this.function = false
                element.loading = false;
                element.online = true

                setTimeout(() => {
                    element.online = false
                }, 3000)
                

            }, 3000);
        },

        getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
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
        },

        NewContact() {
            if(this.newContactBool == false) {
                this.newContactBool = true;
                
            } else {
                this.newContactBool = false;
            }
        },

        addNewContact() {
            this.newContactBool = false;
            this.popupBool = true;
        },

        pushNewContact() {

            if (!this.newContact.image.includes('https://')) {
                alert('inserisci un link corretto per la foto')
            } else {
                this.newContact.id += this.arrFriends.length;
                this.arrFriends.push({...this.newContact})
    
                this.newContact= {
                    name: '',
                    lastMessage: '',
                    timeAccess: '',
                    image: '',
                    messages: [],
                    searchBool: false,
                    openMenu: false
                }
    
                this.popupBool = false;
            }

        },

        scrollToBottom() {
            const container = document.querySelector('.content-message')
            container.scrollTop = container.scrollHeight;
        }
    },
    updated() {
        this.scrollToBottom();
    }
})





/*


SUPER BONUSES

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