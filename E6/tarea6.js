function ordenarBurbuja(info){
 let largoInfo = info.length;
 for(let i1 = 0; i1 < largoInfo; i1++ ){
  for ( let j = 0; k = largoInfo - i1, j < k; j++ ){
   if (info[j] > info[j +1]){
    [info [j], info [j+1]] = [info[j +1], info [j]]
   }
  }
 }
 return info;
}

let numerosBurbuja = [3, 6, 12, 5, 100, 1 ]
 console.log(numerosBurbuja);
console.log();
let resultadoBurbuja =ordenarBurbuja(numerosBurbuja);
console.log(resultadoBurbuja);
