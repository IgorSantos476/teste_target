const fs = require('fs');
const Data = fs.readFileSync('../faturamento.json');
const data = JSON.parse(Data);

let Num = data.map(i => i.value);
let num = Num.filter(x => x > 0);

    //  --> VALOR MÁXIMO DO FATURAMENTO
let max = Math.max(...num);
console.log(`O valor máximo de faturamento foi de ${max} R$`);              // RESULTADO: 433,90 R$

    // --> VALOR MÍNIMO DO FATURAMENTO
let min = Math.min(...num);
console.log(`O valor mínimo de faturamento foi de ${min} R$`);              // RESULTADO: 43,00 R$


// --> dias no mês em que o valor de faturamento diário foi superior à média mensal
let average = Math.round(num.reduce((a, b) => a + b, 0) / 30);
let arr = [];
data.forEach(i => {

    if(i.value > average) arr.push(i);
    else return
});

console.log(`Foram ${arr.length} dias de faturamento acima da média`);      // RESULTADO: 12 dias de faturamento acima da média