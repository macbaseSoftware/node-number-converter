const express = require('express');
const app = express();
app.use('/', require('./api/index'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on port ${PORT}`));
