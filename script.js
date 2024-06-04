// Esperamos a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Agregamos un event listener al formulario para llamar a la función calcular cuando se envíe
    document.getElementById('calculator-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Evitamos que el formulario se envíe
      calcular(); // Llamamos a la función calcular
    });
  });
  
  // Función para calcular el resultado
  function calcular() {
    // Obtenemos los valores de los inputs
    var montoARS = parseFloat(document.getElementById('montoARS').value);
    var fechaInput = document.getElementById('fecha').value;
    
    // Convertimos el formato de fecha de "MM/AAAA" a "MM-AAAA"
    var fechaParts = fechaInput.split('-');
    var mes = fechaParts[1].padStart(2, '0'); // Agregamos cero inicial si es necesario
    var fecha = mes + '-' + fechaParts[0]; // Cambiamos el orden de mes y año con un guión
    
    // Creamos una tabla de meses con sus respectivos valores
    var tablaMeses = {
      "01-2023": 1.79,
      "02-2023": 1.78,
      "03-2023": 1.76,
      "04-2023": 1.74,
      "05-2023": 1.72,
      "06-2023": 1.71,
      "07-2023": 1.69,
      "08-2023": 1.65,
      "09-2023": 1.60,
      "10-2023": 1.57,
      "11-2023": 1.52,
      "12-2023": 1.39,
      "01-2024": 1.27,
      "02-2024": 1.17,
      "03-2024": 1.08,
      "04-2024": 1,
      // Agrega más meses según sea necesario
    };
    
    // Verificamos si la fecha existe en la tabla
    if (tablaMeses.hasOwnProperty(fecha)) {
      
      var coeficiente = tablaMeses[fecha];
      var resultado = montoARS * coeficiente;
      var perdida = resultado - montoARS;
      var perdidaporc = (perdida/montoARS) * 100;
  
      // Formateamos el resultado con separadores de miles
      var resultadoFormateado = resultado.toLocaleString('es-AR');
      var perdidaFormateado = perdida.toLocaleString('es-AR');
    
      // Mostramos el resultado en el campo de resultados
      document.getElementById('results').innerText = "Tu sueldo debería ser de: " + (resultadoFormateado + " ARS") + ". Actualmente has perdido " + (perdidaFormateado) + "ARS contra la inflación, es decir, un " + (perdidaporc)+"%.";
    } else {
      // Si la fecha no existe en la tabla, mostramos un mensaje de error
      document.getElementById('results').innerText = "Fecha no válida";
    }
  }
  