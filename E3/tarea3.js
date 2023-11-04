let numeros= [1,2,4]
function Operaciones(Array){
const Suma= numeros.reduce((a, b) => a + b, 0);
  const Multiplicacion = numeros.reduce((a, b) => a * b, 1);
return {Suma, Multiplicacion}
}
 const resultados = Operaciones(numeros);
console.log(`El resultado de la suma es: ${resultados.Suma}  y el producto ${resultados.Multiplicacion}`);
