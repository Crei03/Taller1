// Cargar el JSON desde la URL
fetch('http://localhost/taller1/PeriodicTableJSON.json')
.then(response => response.json())
.then(data => {
  // Crear un objeto donde los números atómicos sean las claves
  const elementos = data.elements.reduce((acc, element) => {
    acc[element.number] = {
      name: element.name,
      atomic_mass: element.atomic_mass,
      density: element.density,
      period: element.period,
      group: element.group,
      electron_configuration: element.electron_configuration,
      ionization_energies: element.ionization_energies
    };
    return acc;
  }, {});

  // Seleccionar todos los td que tienen el atributo data-number
  document.querySelectorAll('td[data-number]').forEach(td => {
    td.addEventListener('mouseover', function() {
      const numero = this.getAttribute('data-number');  // Obtener el número atómico desde el atributo data-number
      mostrarInformacion(numero, elementos);
    });
    td.addEventListener('mouseout', function() {
      limpiarInformacion();  // Limpiar la información cuando el mouse se sale
    });
  });
})
.catch(error => console.error('Error al cargar el JSON:', error));

// Función para mostrar la información del elemento
function mostrarInformacion(numero, elementos) {
const elemento = elementos[numero];
if (elemento) {
  const info = `
    <h2>${elemento.name}</h2>
      <p><span>Masa atómica:</span> ${elemento.atomic_mass}</p>
      <p><span>Densidad:</span> ${elemento.density}</p>
      <p><span>Período:</span> ${elemento.period}</p>
      <p><span>Grupo:</span> ${elemento.group}</p>
      <p><span>Configuración electrónica:</span> ${elemento.electron_configuration}</p>
      <p><span>Energía de ionización:</span> ${elemento.ionization_energies[0]}</p>
    `;
  document.getElementById('info-elemento').innerHTML = info;
}
}

// Función para limpiar la información
function limpiarInformacion() {
document.getElementById('info-elemento').innerHTML = '';
}