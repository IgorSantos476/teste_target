let arr = [];

function sequencia(value) {
    let indice = 0;
    let numero;
    let a = 0;
    let z = 1;

    while(indice <= value) {
        numero = a + z;
        a = z;
        z = numero;
        
        arr.push(numero);

        indice++;
    }

    if(arr.find(i => i == value)) {
        return `Esse número existe na sequencia Fibonacci `
        
    } else {
        return `Esse número não foi encontrado na sequencia Fibonacci`;
    }
}

console.log(sequencia(21));