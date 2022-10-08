const express = require('express');
const {db} = require('./utils/database');
const initModels = require('./models/initModels');
const config = require('./config');
const productsRouter = require('./products/products.router')

const port = config.port;
const app = express();

db.authenticate()
    .then(() => console.log('DB Authentication Succesfully'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.log(err))

initModels()

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({message:'Server OK!'})
});

app.use('/products', productsRouter)



app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})

