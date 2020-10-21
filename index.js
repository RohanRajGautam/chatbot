const express = require('express')
const bodyParser = require('body-parser');
const config = require('./config/keys')

const app = express();
const PORT = process.env.PORT || 5000

//Routes
const dialogFlowRoutes = require('./routes/dialogFlowRoutes')


app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({hello: 'there'})
})

app.use(dialogFlowRoutes)

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
  });