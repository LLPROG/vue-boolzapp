const app = new Vue({
    el: '#app',
    data: {
        /// loading boolean
        loading: false,
        search: ''.toLowerCase(),
        show: 'show',
        /// object to introduce /// insert in arrFriend ?
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
            this.loading = true;
        },

        timeout() {
            setTimeout(() => {
                let date = luxon.DateTime.now().toISO().split('.')[0]
                this.object.timeMessage = date 
                this.object.message = false;
                this.object.text = 'ok!';

                this.arrFriends[this.selectUserIndex].messages.push({...this.object});
                
                this.object.message = true;
                this.object.text = '';
                this.function = false
                this.loading = false;
            }, 3000)
        },

        functions() {
            if (this.object.text != '') {
                this.sendMessage();
                this.timeout()
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


SUPER BONUSES

- A) cambiare icona in basso a destra (a fianco all'input per scrivere un nuovo messaggio) finché l'utente sta scrivendo: di default si visualizza l'icona del microfono, quando l'input non è vuoto si visualizza l'icona dell'aeroplano. Quando il messaggio è stato inviato e l'input si svuota, si torna a visualizzare il microfono.


B) inviare quindi il messaggio anche cliccando sull'icona dell'aeroplano
- predisporre una lista di frasi e/o citazioni da utilizzare al posto della risposta "ok:" quando il pc risponde, anziché scrivere "ok", scegliere una frase random dalla lista e utilizzarla come testo del messaggio di risposta del pc
- visualizzare nella lista dei contatti l'ultimo messaggio inviato/ricevuto da ciascun contatto
- inserire l'orario corretto nei messaggi (v. note day.js)
- sotto al nome del contatto nella parte in alto a destra, cambiare l'indicazione dello stato: visualizzare il testo "sta scrivendo..." nel timeout in cui il pc risponde, poi mantenere la scritta "online" per un paio di secondi e infine visualizzare "ultimo accesso alle xx:yy" con l'orario corretto
- dare la possibilità all'utente di cancellare tutti i messaggi di un contatto o di cancellare l'intera chat con tutti i suoi dati: cliccando sull'icona con i tre pallini in alto a destra, si apre un dropdown menu in cui sono presenti le voci "Elimina messaggi" ed "Elimina chat"; cliccando su di essi si cancellano rispettivamente tutti i messaggi di quel contatto (quindi rimane la conversazione vuota) oppure l'intera chat comprensiva di tutti i dati del contatto oltre che tutti i suoi messaggi (quindi sparisce il contatto anche dalla lista di sinistra)
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