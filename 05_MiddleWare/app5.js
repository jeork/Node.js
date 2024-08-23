const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true,
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/products/write', (req, res) => {
    res.render('write');
})

app.post('/products/write', (req, res) => {
    res.send(req.body.name);
})




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
