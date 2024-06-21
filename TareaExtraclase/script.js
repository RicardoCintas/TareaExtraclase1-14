class Registro {
    constructor(est, mat){
        this.est = est;
        this.mat = mat;

    }



}

class Evaluacion extends Registro {
    constructor(est, mat, calif){
        super(est, mat);
        this.calif = calif;
    }

}


let evaluaciones = [];

function registrarEvaluacion(est, mat, calif){
    let evaluacion = new Evaluacion(est, mat, calif);
    evaluaciones.push(evaluacion);
}

function mostrarEvaluaciones(){
    for(let eval of evaluaciones){
        console.log("Estudiante: "+ eval.est+ "\nMateria: "+ eval.mat+ "\nCalificación: "+ eval.calif);
    }
}

function calcularPromedio(mat){
    let sum = 0, count = 0;
    let found = false;
    for(let eval of evaluaciones){
        if(eval.mat == mat){
            sum += parseInt(eval.calif);
            count++;
            found = true;
        }
            
    }

    return found == true? sum/count: 'Materia no encontrada';
}

function validarPrompt(mensaje, esNumero) {
  let valor = prompt(mensaje);
  if(esNumero) {
    valor = parseFloat(valor);

    while(isNaN(valor) || valor < 2 || valor > 5) {
      valor = parseFloat(prompt(mensaje));
    }

  } 
  
  else {
    while(valor === null || valor.trim() === "") {
      valor = prompt(mensaje);
    }
  }
  return valor;
}

function menu() {
    let opcion = parseInt(prompt('Elige una opción:\n. Registrar evaluación\n. Mostrar evaluaciones\n. Calcular promedio\n. Salir'));
    switch(opcion) {
      case 1:

        registrarEvaluacion(validarPrompt('Digite el nombre del estudiante', false), validarPrompt('Digite el nombre de la materia', false), validarPrompt('Digite la calificación', true));
        break;
      case 2:
        mostrarEvaluaciones();
        break;
      case 3:
        alert(calcularPromedio(validarPrompt('Digite la materia que se desea calcular su promedio', false)));
        break;
      case 4:
        return;
      default:
        alert('Opción no válida');
    }
    menu();
  }
  
  menu();