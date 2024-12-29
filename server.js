// node_module တွင်ရှိ express ကို လှမ်းခေါ်ယူသုံးဖို့ရန် တည်ဆောက်ခြင်း
// const express = require('express');
import express from 'express';

// path ကို ခေါ်ယူခြင်း
// const path = require('path');
import path from 'path';

// url
import { fileURLToPath } from 'url';

// posts link
// const posts = require('./routes/posts');
import posts from './routes/posts.js';

// logger
// const logger = express('./midleware/logger');
import logger from './midleware/logger.js';

// error
// const errorHandler = express('./midleware/error.js');
import errorHandler from './midleware/error.js';

// notFound
// const notFound = express('./midleware/notFound');
import notFound from './midleware/notFount.js';

const port = process.env.PORT || 5000;

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// server port နံပါတ် သတ်မှတ်ပေးခြင်း
// const port = 5000;

// ခေါ်ယူထားသော express ကို နာမည် သတ်မှတ်ပေးခြင်း
const cddk = express();

// Body parser middleware
cddk.use(express.json());
cddk.use(express.urlencoded({ extended: false }));

// midleware logger
cddk.use(logger);

// setup static folder
// cddk.use(express.static(path.join(__dirname, 'public')));

// setup static folder
cddk.use(express.static(path.join(__dirname, 'public')));

//  routes link
cddk.use('/api/posts', posts);

// notFound
cddk.use(notFound);

// Error handler
cddk.use(errorHandler);


// console ထုတ်ပေးဖို့ရန်
cddk.listen(port, () => console.log(`Server is running on http://localhost:${port}`));