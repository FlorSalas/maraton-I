// //maraton
//ejerciocio 1
// let nombre=prompt("¿cual es tu nombre?");

// let saludo="hola " + nombre + " bienvenid@ a nuestra pagina!";
// alert(saludo);

// let mayus=(saludo.toUpperCase(""));
// alert(mayus);

// let minus=(saludo.toLowerCase(""));
// alert(minus);

// //ejercicio 2
// let numero1=parseInt(prompt("Ingrese un numero."));
// let numero2=parseInt(prompt("Ingrese otro numero."));
// let respuesta=prompt("¿Desea ver el resultado en pantalla? S/N");

// if(respuesta=="S"){
//     alert("La suma de los dos numeros es de: " + (numero1+numero2));
//     if(numero1<numero2){
//         alert("la resta de ambos numeros es: " + (numero2-numero1));
//     }else if(numero1>numero2){
//         alert("la resta de ambos numeros es: " + (numero1-numero2));
//     }
// }else if(respuesta=="N"){
//     alert("gracias por visitar nuestra pagina.");
// }

//ejercicio 3
// let texto=prompt("Ingrese aqui su texto");
// let pantalla=prompt("¿Desea ver el resultado en pantalla? S/N");

// if(pantalla=="S"){
//     alert(texto.toUpperCase(""));
// }else if(pantalla=="N"){
//     console.log(texto.toUpperCase(""));
// }

//ejercicio 4
// let numero1, numero2, operacion, confirm=true;

// numero1=parseInt(prompt("Ingrese un numero."));
//     numero2=parseInt(prompt("Ingrese otro numero."));
//     operacion=prompt("¿desea realizar una suma, resta, multiplicacion o division)");
//         if(operacion=="suma"){
//             alert("el resultado es: " + suma(numero1,numero2));
//         }else if(operacion=="resta"){
//             alert("el resultado es: " + resta(numero1,numero2));
//         }else if(operacion=="multiplicacion"){
//             alert("el resultado es: " + mult(numero1,numero2));
//         }else if(operacion=="division"){
//             alert("el resultado es: " + div(numero1,numero2));
//         }else{
//     alert("Ha ingresado un dato invalido");
// // }
// function suma(n1,n2){
//     return n1+n2;
// }
// function resta(n1,n2){
//     return n1-n2;
// }
// function mult(n1,n2){
//     return n1*n2;
// }
// function div(n1,n2){
//     return n1/n2;
// }

//ejercicio 5
// let numero1, numero2, operacion, pregunta, confirm=true;

//     numero1=parseInt(prompt("Ingrese un numero."));
//     numero2=parseInt(prompt("Ingrese otro numero."));
//     operacion=prompt("¿desea realizar una suma, resta, multiplicacion o division)");
//         if(operacion=="suma"){
//             alert("el resultado es: " + suma(numero1,numero2));
//         }else if(operacion=="resta"){
//             alert("el resultado es: " + resta(numero1,numero2));
//         }else if(operacion=="multiplicacion"){
//             alert("el resultado es: " + mult(numero1,numero2));
//         }else if(operacion=="division"){
//             alert("el resultado es: " + div(numero1,numero2));
//         }
//    pregunta= confirm("Desea continuar?"); 

// while(confirm){
//     numero1=parseInt(prompt("Ingrese un numero."));
//     numero2=parseInt(prompt("Ingrese otro numero."));
//     operacion=prompt("¿desea realizar una suma, resta, multiplicacion o division)");
//         if(operacion=="suma"){
//             alert("el resultado es: " + suma(numero1,numero2));
//         }else if(operacion=="resta"){
//             alert("el resultado es: " + resta(numero1,numero2));
//         }else if(operacion=="multiplicacion"){
//             alert("el resultado es: " + mult(numero1,numero2));
//         }else if(operacion=="division"){
//             alert("el resultado es: " + div(numero1,numero2));
//         }
//         pregunta=confirm("Desea continuar?"); 
//     }

// function suma(n1,n2){
//     return n1+n2;
// }
// function resta(n1,n2){
//     return n1-n2;
// }
// function mult(n1,n2){
//     return n1*n2;
// }
// function div(n1,n2){
//     return n1/n2;
// }