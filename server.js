const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helper');

app.use(express.static(__dirname + '/public'));

//Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

  res.render('home', {
    nombre: 'Jhull Rondon',
    anio: new Date().getFullYear()
  });
});

app.get('/about', (req, res) => {

  res.render('about', {
    anio: new Date().getFullYear()
  });
});

 
app.listen(3000, console.log('Escuchando peticiones sobre el puerto: 3000'));