const express = require('express');
const cors = require('cors');
const routes = require('./routes/index.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use('', routes);


app.listen(8800, async () => {
});

module.exports=app;