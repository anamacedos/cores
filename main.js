"use strct"     /*fala "seja mais rigoroso com meu código e não deixe erros passarem" */

const botaoTrocarCor = document.getElementById('trocar-cor')/*é necessario colocar o botão em uma variavel para poder manipula-lo, pegar um elemento pelo id, botao trocar cor "se torna" O BOTÃO*/

function trocarCor(){
    const cor = document.getElementById('cor').value
    document.documentElement.style.setProperty('--cor-fundo', cor)
}

botaoTrocarCor.addEventListener('click', trocarCor) /*adicionar algo que ouve os "eventos", como o click */
