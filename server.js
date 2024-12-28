// node_module တွင်ရှိ express ကို လှမ်းခေါ်ယူသုံးဖို့ရန် တည်ဆောက်ခြင်း
const express = require('express');
// import express from 'express';

// path ကို ခေါ်ယူခြင်း
const path = require('path');
// import path from 'path';

// posts link
const posts = require('./routes/posts');
// import posts from './routes/posts';

// logger
const logger = express('./midleware/logger');
// import logger from './midleware/logger';

// error
const errorHandler = express('./midleware/error');
// import error from './midleware/error';

const port = process.env.PORT || 5000;

// server port နံပါတ် သတ်မှတ်ပေးခြင်း
// const port = 5000;

// ခေါ်ယူထားသော express ကို နာမည် သတ်မှတ်ပေးခြင်း
const cddk = express();

// Body parser middleware
cddk.use(express.json());
cddk.use(express.urlencoded({ extended: false }));

// midleware logger
cddk.use(logger);

//  routes link
cddk.use('/api/posts', posts);

// Error handler
cddk.use(errorHandler);


// console ထုတ်ပေးဖို့ရန်
cddk.listen(port, () => console.log(`Server is running on http://localhost:${port}`));