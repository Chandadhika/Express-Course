// node_module တွင်ရှိ express ကို လှမ်းခေါ်ယူသုံးဖို့ရန် တည်ဆောက်ခြင်း
// const express = require('express');
import express from 'express';

// path ကို ခေါ်ယူခြင်း
// const path = require('path');
import path from 'path';

// posts link
// const posts = require('./routes/posts');
import posts from './routes/posts.js';

const port = process.env.PORT || 5000;

// server port နံပါတ် သတ်မှတ်ပေးခြင်း
// const port = 5000;

// ခေါ်ယူထားသော express ကို နာမည် သတ်မှတ်ပေးခြင်း
const cddk = express();

//  routes link
cddk.use('/api/posts', posts);


// console ထုတ်ပေးဖို့ရန်
cddk.listen(port, () => console.log(`Server is running on http://localhost:${port}`));