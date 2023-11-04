
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
/*1.	Write a command that prints out all 
of the people in the list.**/
function printOut(arrays){
 console.log(people.join(','));
}

// Write the command to remove "Dani" from the array.
const lista = people.indexOf("Dani")
if (lista !== -1){
 console.log(people.splice(lista, 1));
}

console.log("The list of people is: " + people.join(','));

//otro remove de eliminar a Dani // 

people = people.filter(person => person !== "Dani");

console.log("The array is: " + people.join(", "));

//Write the command to move "Luis" to the front of the array.

const index = people.indexOf("Luis"); 
if (index !== -1) {
  people.splice(index, 1); 
  people.unshift("Luis"); 
}

console.log("The array is: " + people.join(", "));
// Write the command to add your name to the end of the array.
people.push("Gaby");
console.log("El array es: " + people);

/* Using a loop, iterate through this array and after console.log "Maria", 
exit from the loop. (usar break) **/

for (let i = 0; i < people.length; i++) {
  if (people[i] === "Maria") {
    console.log("Maria");
    break;
  }
console.log(people[i]);
}


//Write the command that gives the indexOf where "Maria" is located.
const indexOfMaria = people.indexOf("Maria");
console.log("The index of Maria is: " + indexOfMaria);
