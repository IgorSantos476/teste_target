let btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    let input = document.querySelector('#input');

    if(isNaN(input.value) == false) {
        document.querySelector('span').innerText = 'Insira uma palavra';
        input.value = "";

    } else {
        let word = '';

        for(let i = input.value.length -1; i >= 0; i--) {
            word += input.value[i];
        }

        document.querySelector('span').style.fontSize = `${1.5}em`;
        document.querySelector('span').innerText = word;
    }
});