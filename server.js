// node_module တွင်ရှိ express ကို လှမ်းခေါ်ယူသုံးဖို့ရန် တည်ဆောက်ခြင်း
const express = require('express');

// server port နံပါတ် သတ်မှတ်ပေးခြင်း
const port = 5070;

// ခေါ်ယူထားသော express ကို နာမည် သတ်မှတ်ပေးခြင်း
const cddk = express();

// Rout ကို တည်ဆောက်ခြင်း
cddk.get('/', (req, res) => {
    res.send('Hello World');
});

// console ထုတ်ပေးဖို့ရန်
cddk.listen(port, () => console.log(`Server is running on http://localhost${port}`));