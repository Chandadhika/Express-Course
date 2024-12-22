const express = require('express');

const cddk = express();

const port = 5050;

cddk.listen(port, () => console.log(`Server is running on http://localhost${port}`));