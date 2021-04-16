///Variables y constantes

console.log('Alcance de variables');

var variableGlobal = 'variable de alcance global';
const varConstante = 'Constante durante la ejecuccion';
let  varLetlocal = 'ABC';
let varLetnumero = 1112;

console.log('Variable Global 1 '+ variableGlobal);
console.log('Constante = ' + varConstante);
{
    variableGlobal = 'otro valor';
    console.log('variable Global 2.' + variableGlobal);
    let varLetlocal = 'XYZ';
    console.log('letLocal : ' + varLetlocal);
}
console.log('letLocal:' + varLetlocal);

console.log('-------------------EVALUACION--------+');
let evaluacioniF = true;

if (evaluacioniF) {
    console.log('Adentro del IF');
    let letNumeroY = 11;
    let letNumeroX = 76;


    console.log('operacion * = ' + (letNumeroX * letNumeroY));

}else{

    console.log('Estamos en el Else del if');
}


console.log('+----------SELECTOR--------------+');
let letKey = 2;
switch (letKey) {
    case 1:
        console.log('caso para 1');
        break;
case 2:
    console.log('caso para 2');
    case 3:
    console.log('caso para 3');
    default:
        console.log('valor no dterminado en el selector');
        break;
}




