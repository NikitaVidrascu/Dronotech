/*
    Esta parte es necesaria para la review
    Lo que hace es calcular el Height de cada reseña y ajusta el cuadrado al tamaño de la reseña mas grande 
    para poder verla entera y ademeas, detecta los scroll y ajusta el indicador
*/
const allReview = Array.from(document.querySelectorAll('.review')); // Los convertimos en un array
const reviewWrapper = document.querySelector('.review-wrapper'); 
const indicador = document.querySelector('.review-indicador');

// Calculamos la altura máxima de las reseñas
const arrHeight = allReview.map(item => {
  return item.offsetHeight;
});

const largeHeight = Math.max(...arrHeight); // Encontramos la altura máxima de la lista

// Establecemos la altura igual para todas las reseñas
reviewWrapper.style.maxHeight = largeHeight + 'px';

allReview.forEach((item, idx) => {
  item.style.height = largeHeight + 'px'; // Establecemos la altura máxima a cada elemento

  item.id = 'review-' + idx; // Asignamos un ID para su diferenciar cada reseña

  const a = document.createElement('a'); // Creamos los puntos del indicador

  a.href = '#' + item.id; // Asignamos un ID que concuerda a su reseña

  indicador.appendChild(a);

});

const allLinkIndicador = document.querySelectorAll('.review-indicador a');

allLinkIndicador[0].classList.add('active'); // Agregamos la clase para que el primero se active por defecto

reviewWrapper.addEventListener('scroll', function() {
  let linkActive; // Variable para almacenar el ID de la reseña actua

  allReview.forEach(item => {
    // Si la posición del scroll se encuentra dentro del rango se establece en el ID de esa reseña
    if (
        this.scrollTop >= (item.offsetTop - (item.offsetHeight / 2) - 28) &&  
        this.scrollTop <= (item.offsetTop + (item.offsetHeight / 2) - 28)) {
        linkActive = item.id;
    }
  });

  allLinkIndicador.forEach(item => {
    // Si el atributo `href` del enlace actual coincide se agrega la clase `active`
    if (item.getAttribute('href') === '#' + linkActive) {
      item.classList.add('active'); 
    } else {
    // Si no coincide, se elimina la clase `active`
      item.classList.remove('active'); 
    }
  });
});
