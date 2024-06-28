let res = document.querySelector("section#result")
let jogador = 0
let computador = 0

function sortear() {
    let min = 1 
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio)
}

function jogar() {
    jogador = Number(window.prompt('Qual é o seu palpite?'))
    if (jogador > computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>Menor</strong>!</p>`
    }
    else if (jogador < computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>Maior</strong>!</p>`
    }
    else if (jogador == computador) {
        res.innerHTML += `<p><strong>Parabéns</strong>! Você acertou o número que eu sorteei.</p>`
    }
}