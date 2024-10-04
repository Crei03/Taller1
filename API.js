fetch('http://localhost:5501/PeriodicTableJSON.json')
  .then(response => response.json())
  .then(data => {
    const categories = data.elements.reduce((acc, element) => {
        const category = element.category;  // Accedemos a la categoría de cada elemento
        if (acc[category]) {
          acc[category]++;  // Si ya existe la categoría, incrementamos el contador
        } else {
          acc[category] = 1;  // Si no existe, inicializamos el contador
        }
        return acc;
      }, {});
  
      console.log("Elementos agrupados por categorías:", categories);
})
  .catch(error => console.error('Error al cargar el JSON:', error));

  //cargar el dato con el id 1