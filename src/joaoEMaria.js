// joaoEMaria.js
console.log('módulo joaoEMaria');

let joao = 1;
let maria = 2;

function getMaria() {
    return maria;
}

function getJoao() {
    return joao;
}

function setJoao(novoValor) {
    if(novoValor > 0)
    {
        joao = novoValor;
    }
    else
    {
        joao = 0;
    }  
}

function setMaria(novoValor) {
    if(novoValor > 0)
    {
        maria = novoValor;
    }
    else
    {
        maria = 0;
    }
}



export {getJoao, getMaria, setJoao, setMaria}