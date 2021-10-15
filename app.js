const express = require('express')
const app = express();
const port = 3000;
const ManejadorErrores = require('./ManejadorErrores');
const ConfigRouter = require('./ConfigRutas');


app.use(express.text());

app.listen(port, () => {
    console.log('Puerto: ' + port);
});

//Responder un texto (el que desee) cuando se le haga un get a la ruta /holamundo
app.get('/holamundo', (req, res) => {
    res.send('Hola App Web');
})

//Exponer archivos en una ruta específica mediante ruta establecida.
app.use('/descargarArchivo', ConfigRouter)


//Tener la capacidad de recibir un texto (en el cuerpo del mensaje) mediante el método POST
app.post('/', (req, res) => {
    res.send('Enviando información desde POST a la consola NodeJS');
    console.log(req.body);
});

app.all('*', (req, resp, next) => {
    next(new ManejadorErrores(`\nERROR al intentar acceder a una URL no disponible.\n\n`, 404));
});

app.use(ManejadorErrores);