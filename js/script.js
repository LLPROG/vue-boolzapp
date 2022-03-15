const app = new Vue({
    el: '#app',
    data: {
        selectUserIndex: 0,
        arrFriends: [
            {
                name: 'Michele',
                lastMessage: 'ultimo messaggio',
                timeAccess: '12.00',
                image: 'avatar_1.jpg',
            },
            {
                name: 'Fabio',
                lastMessage: 'ultimo messaggio',
                timeAccess: '12.00',
                image: 'avatar_2.jpg',

            },
            {
                name: 'samuele',
                lastMessage: 'ultimo messaggio',
                timeAccess: '12.00',
                image: 'avatar_3.jpg',

            },
            {
                name: 'Alessandro B.',
                lastMessage: 'ultimo messaggio',
                timeAccess: '12.00',
                image: 'avatar_4.jpg',

            },
            {
                name: 'Alessandro L.',
                lastMessage: 'ultimo messaggio',
                timeAccess: '12.00',
                image: 'avatar_5.jpg',

            },
            {
                name: 'Claudia',
                lastMessage: 'ultimo messaggio',
                timeAccess: '12.00',
                image: 'avatar_6.jpg',

            },
            {
                name: 'Federico',
                lastMessage: 'ultimo messaggio',
                timeAccess: '12.00',
                image: 'avatar_7.jpg',

            },
            {
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
            this.selectUserIndex += index
        },
    }
})