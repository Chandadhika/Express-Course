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

## install solfware
        Postman software install
        click New HTTP Request

## folder တည်ဆောက်ခြင်း
.env > PORT = 7005

## server.js-တွင် ကုဒ်ကို ထည့်ခြင်း
    ထည့်တိုးမှု=  const port = process.env.PORT || 5000;

ပြောင်းလဲမှု= cddk.listen(port, () => console.log(`Server is running on http://localhost:${port}`));

## scriptတွင် ပြောင်းလဲခြင်း
       "dev": "node --watch server"
       မှ
        "dev": "node --watch --env-file=.env server" သို့ ပြောင်းလဲခြင်း

## Get single post ပြောင်းလဲ
        // Get single post
        cddk.get('/api/posts/:id', (req, res) => {
        console.log(req.params);
        res.json(posts);
        });

        // filter
        cddk.get('/api/posts/:id', (req, res) => {
        const id = parseInt(req.params.id);
        res.json(posts.filter((post) => post.id === id));
        });

## query
cddk.get('/api/posts', (req, res) => {
    console.log(req.query);
    res.json(posts);
});

## limit
cddk.get('/api/posts', (req, res) => {
    const limit = parseInt(req.query.limit);
    
    if (!isNaN(limit) && limit > 0) {
        res.json(posts.slice(0, limit));
    } else {
        res.json(posts);
    }
});

## postman-တွင် စမ်းသပ်ခြင်း
http://localhost:7005/api/posts?limit=1,2,3


## filter to find
// filter
        cddk.get('/api/posts/:id', (req, res) => {
        const id = parseInt(req.params.id);
        res.json(posts.filter((post) => post.id === id));
        });

// find
cddk.get('/api/posts/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const post = posts.filter((post) => post.id === id);

// ပြဿနာကို ရှာဖွေဖော်ထုတ်ခြင်း
        if (!post) {
            res.status(404).json({ msg: ` A post with the id of ${id} was not found`});
        } else {
            res.status(200).json(post);
        }
        });

## NOTE
res.status(200) OK
res.status(404) Error


## folder တည်ဆောက်ခြင်း
- routes folder
> posts.js file
>>      const express = require('express');
        const router = express.Router();

        (cut from server.js codes paste to posts.js)

        export default router;

- server.js 
        >// posts link
        const posts = require('./routes/posts');

        //  routes link
        cddk.use('/api/posts', posts);

## Delete
- posts.js
>> delete (api/posts)

## change export line
- posts.js
>> export default router change to module.exports = router;

## added script
- package.json
>> "type": "module"

## change const to import
- server.js 
>> import express from 'express';
>> import path from 'path';
>> import posts from './routes/posts.js';

- posts.js
>> import express from 'express';
>> export default router;

## Create new post
- posts.js
        router.post('/', (req, res) => {
        // console.log(req.body);
        const newPost = {
                id: posts.length + 1,
                title: req.body.title,
        };

        if (!newPost.title) {
                return res.status(400).json({msg: `please include a title});
        }
        posts.push(newPost);
        res.status(201).json(posts);
        });

- server.js
       // Body parser middleware
        cddk.use(express.json());
        cddk.use(express.urlencoded({ extended: false }));