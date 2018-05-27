'use strict'
const BootBot = require('bootbot');

const bot = new BootBot({
    accessToken: '',
    verifyToken: '',
    appSecret: ''
});

//Responde los mensajes
// bot.on('message', (payload, chat) => {
//     console.log('Entire');

//     const text = payload.message.text;

//     chat.say(`Echo ${text}`);
// });

// bot.hear(['hi', 'hello', 'hola', 'que onda', 'holi'], (payload, chat) => {
//     chat.say('Hola usuario').then(() => {
//         chat.say('Hola como estas humano', {typing: true});
//     }).catch(error => {
//         console.log(`Error ${error}`);
//     });
// });


//Quick replies
// bot.hear(['comida', 'hambre'], (payload, chat) => {
//     chat.say({
//         text: 'What do you want to eat today?',
//         quickReplies: ['Mexican', 'Italian', 'American', 'Argentina']
//     })
// });



bot.start();
