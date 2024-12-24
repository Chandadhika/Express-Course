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