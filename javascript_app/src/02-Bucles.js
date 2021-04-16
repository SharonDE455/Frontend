console.log('+----------BUCLE--------------+');



let limiteBucle = 10;
let contador = 0;

console.log('+ Bucle: Do While');
do {
    contador ++;
    console.log('Contador: ' +contador);
} while (contador < limiteBucle);

console.log('+ Bucle: Do While');
let letCondicion = true;
while (letCondicion){
let letRamdom = Math.random() * 10;
console.log('Numero Randomico: ' +letRamdom);
if (letRamdom > 5)  {
    letCondicion = false;
    console.log('salida del bucle: '+ letCondicion);
   }
}

//RETO: 
//1. implementar un contador  
//2. sumar los numeros ramdomicos en un acumulador


    console.log('+-----while con contador y sumatoria de repeticiones------+');
    let condicion = true;
    let contador2 = 0;
    let suma = 0;

    while (condicion) {
        let Random = Math.random() *10;
        suma += Random;

        contador2++;
        console.log('Cantiadad de repeticiones: ' +contador2);
        console.log('Valor total: '+ suma);

        if (suma > 100){
            condicion = false;
            console.log('Salida del bucle')
        }
        
    }



//-----------------------------------
console.log('+ Bucle: For');

let limiteFor = 20;
console.log('Limite = ' +limiteFor);
for (let index = 0; index < limiteFor; index++) {
    let ramdomFor = Number.parseInt ((Math.random() * 10),10);
    console.log('Indice for: '+index);
    console.log('Ramdom    : '+ramdomFor);

}
    

    //Implementar un nuevo FOR


console.log('+ Bucle: For 2 ejemplo +');

let num = [10, 20, 30];

for (let value of num) {
  value += 2;
  console.log(value);
}

