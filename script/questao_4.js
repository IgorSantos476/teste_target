const faturamento = [67836.43, 36678.66, 29229.88, 27165.48, 19849.53]

let sp = faturamento[0];
let rj = faturamento[1];
let mg = faturamento[2];
let es = faturamento[3];
let outros = faturamento[4];

let total = faturamento.reduce((a, b) => a + b);

function sum(estado) {
    let porcentagem = Math.round(estado * 100 / total);
    return `${porcentagem}%`;
}

console.log(sum(sp));           // RESULTADO: 38%
  
console.log(sum(rj));           // RESULTADO: 20%
  
console.log(sum(mg));           // RESULTADO: 16%
  
console.log(sum(es));           // RESULTADO: 15%
  
console.log(sum(outros));       // RESULTADO: 11%