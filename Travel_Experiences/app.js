const express = require('express');
const path = require('path');
const logger = require('morgan');
const dbConn = require('./config/db');

const app = express();

app.set('port', process.env.PORT || 3000);

// Configurar ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(logger('debug'))

// Registrar peticiones 
app.use(express.urlencoded({ extended: false }));//filtro que facilita el envio de datos
app.use(express.json()); //establece estandares para leer los JSON

// Importar todas las rutas
const homeRouter = require('./routes/homeRouter');
app.use('/', homeRouter);

const cityRouter = require('./routes/cityRouter');
app.use('/cities', cityRouter);

const categoryRouter = require('./routes/categoryRouter');
app.use ('/categories', categoryRouter);

//static 
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () =>{})

module.exports = app;           