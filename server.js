// node_module တွင်ရှိ express ကို လှမ်းခေါ်ယူသုံးဖို့ရန် တည်ဆောက်ခြင်း
const express = require('express');

// path ကို ခေါ်ယူခြင်း
const path = require('path');

// server port နံပါတ် သတ်မှတ်ပေးခြင်း
const port = 5000;

// ခေါ်ယူထားသော express ကို နာမည် သတ်မှတ်ပေးခြင်း
const cddk = express();

// setup static folder
// cddk.use(express.static(path.join(__dirname, 'public')));

// // Rout ကို တည်ဆောက်ခြင်း
// cddk.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// //about rout
// cddk.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });



// Object
let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'},
];

cddk.get('/api/posts', (req, res) => {
    res.json(posts);
});

// console ထုတ်ပေးဖို့ရန်
cddk.listen(port, () => console.log(`Server is running on http://localhost:${port}`));