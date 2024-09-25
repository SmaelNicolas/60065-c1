// *  Destructuring

// const numerosArray = [1, 2, 3, 4, 5];
// const [uno, dos, tres, , cuatro] = numerosArray;

// console.log(uno);
// console.log(dos);
// console.log(tres);
// console.log(cuatro);

// const numerosArray = [1, 2, 3, 4, 5, 6];
// const [uno, dos, , ...numeros] = numerosArray;

// console.log(uno);
// console.log(dos);
// console.log(...numeros);

// const numerosObjeto = { uno: "1", dos: "2", tres: "3", cuatro: "4" };
// const { uno, dos, tres, cuatro } = numerosObjeto;
// const uno = numerosObjeto.uno;

// console.log(uno);
// console.log(dos);
// console.log(tres);
// console.log(cuatro);

// const saludo = ({ nombre, apellido }) => {
// 	console.log(`Hola ${apellido} ${nombre}`);
// };
// const persona = {
// 	nombre: "Nico",
// 	apellido: "Smael",
// 	dni: 123123,
// 	pais: "Argentina",
// };
// saludo(persona);

// * Spread Operator

// const numeros = [1, 2, 3];
// const suma = (a, b, c) => {
// 	console.log("RESULTADO ", a + b + c);
// };
// suma(numeros[0], numeros[1], numeros[2]);
// suma(...numeros);
// suma(1, 2, 3);

// const animales = ["Perro", "Gato", "Loro"];
// console.log("Animales :", animales);
// console.log("");
// const animales_2 = ["Delfin", ...animales];
// console.log("ANIMALES_2 :", animales_2);
// console.log("");
// const animales_3 = [...animales, "Tigre"];
// console.log("Animales_3 :", animales_3);
// console.log("");
// const animalesDobles = [...animales, ...animales];
// console.log("Animales_Dobles :", animalesDobles);
// const animalesNew = [...new Set(animalesDobles)];
// console.log("animales_New :", animalesNew);

// TERNARIO

// const socio = false;

// console.log(`Valores de la entrada es : ${socio ? "$100" : "$200"}`);


// 1) Filtrar elemtos de un array
// Imperativo
// let numbers = [1, 2, 3, 4, 5];
// let pares = [];

// for (let i = 0; i < numbers.length; i++) {
// 	if (numbers[i] % 2 === 0) {
// 		pares.push(numbers[i]);
// 	}
// }

// console.log(pares); // Output: [2, 4]

// // DECLARATIVO
// let numbersDeclarative = [1, 2, 3, 4, 5];
// let evensDeclarative = numbers.filter((num) => num % 2 === 0);

// console.log(evensDeclarative); // Output: [2, 4]

// 2) Actualizar un array

// IMPERATIVO
// let numbers2 = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers2.length; i++) {
// 	numbers2[i] = numbers2[i] * 2;
// }
// console.log(numbers2); // Output: [2, 4, 6, 8, 10]

// // DECLARATIVO
// let numbers2Declarative = [1, 2, 3, 4, 5];
// let doubledNumbers = numbers2Declarative.map((num) => num * 2);
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// 3) Crear elementos

// IMPERATIVO
// const fruits = ["Apple", "Banana", "Orange"];
// const ul = document.createElement("ul");

// for (let i = 0; i < fruits.length; i++) {
// 	const li = document.createElement("li");
// 	li.textContent = fruits[i];
// 	ul.appendChild(li);
// }
// document.body.appendChild(ul);

// // DECLARATIVO
// const fruitsDeclarative = ["Apple", "Banana", "Orange"];
// const ulDeclarative = document.createElement("ul");

// fruitsDeclarative.forEach((fruit) => {
// 	const li = document.createElement("li");
// 	li.textContent = fruit;
// 	ulDeclarative.appendChild(li);
// });
// document.body.appendChild(ulDeclarative);
