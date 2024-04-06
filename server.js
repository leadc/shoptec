const express = require("express");
const path = require("path");
const handlers = require("./handlers");

const app = express();
const PORT = 80;

app.use('/', express.static(path.join(__dirname, 'public')));

const apiRouter = express.Router();

apiRouter.get('/getProducts', handlers.addProduct);


app.use('/api', apiRouter);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listenin on PORT: ${PORT}`);
});
