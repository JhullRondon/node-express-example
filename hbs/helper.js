const hbs = require('hbs');

//Helpers
hbs.registerHelper('getAnio', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
  //hace todas las letras de las primeras palabras mayusculas
  let palabras = texto.split(' ');
  palabras.forEach((palabra, idx) => {
    palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  });
  texto = palabras.join(' ');
  return texto;
});