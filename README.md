# Repository-ကို စတင်တည်ဆောက်ခြင်း
repository-နာမည်ကို Express-Course-ဖြင့် သတ်မှတ်ထားသည်

## install လုပ်ခြင်း
* npm init -y
* npm i express

## Folder တည်ဆောက်ခြင်း
* gitignore
* env
*>* တည်ဆောက်ထားတဲ့ ဖိုင်ထဲကို node_modules, .env folder-များ ထည့်သွင်းထားခြင်း

## file js-ကို တည်ဆောက်ခြင်း
* နာမည်ကို server.js သတ်မှတ်ထားသည်
၎င်းjs-ထဲကို အောက်ပါကုဒ်တို့ကို ရေးသားခြင်း
        "const express = require('express');
        const cddk = express();
        const port = 5050;
        cddk.listen(port, () => console.log(`Server is running on http://localhost${port}`));"

## server-ကို စမ်းသပ်မောင်းခြင်း
* node server

## Rout-ကို တည်ဆောက်ခြင်း
    (1)
    cddk.get('/', (req, res) => {
    res.send('Hello World');
    });

    (2)
    cddk.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
    });

    (3)
    cddk.get('/', (req, res) => {
    res.send('message: Hello World');
    });

## package.jsonတွင် ပြောင်းလဲခြင်း
    test နေရာတွင် start > node server
    dev > node --watch server တို့ဖြင့် ပြင်ဆင်ပြောင်းလဲထားခြင်း

## run မောင်းခြင်း
npm run dev

## about rout-ကို တည်ဆောက်ခြင်း
        cddk.get('/about', (req, res) => {
        res.send('About');
        });

## Folder တည်ဆောက်ခြင်း
        public folder
        ၎င်းထဲကို index.html and about.html file တည်ဆောက်ခြင်း

## path-ကို ခေါ်ယူခြင်း
        const path = require('path');

## res.send to res.sendFile change
        cddk.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
        });

## ကုဒ်ကို ချုံး၍ တည်ဆောက်ခြင်း
        // setup static folder
        cddk.use(express.static(path.join(__dirname, 'public')));
        ထိုနောက် index, about.html လမ်းကြောင်းကုဒ်တွေကို ဖျက်လိုက်ပါ


## json-အတွက် array-များကို တည်ဆောက်ခြင်း
        let posts = [
        {id: 1, title: 'Post One'},
        {id: 2, title: 'Post Two'},
        {id: 3, title: 'Post Three'},
        ];

        cddk.get('/api/posts', (req, res) => {
        res.json(posts);
        });