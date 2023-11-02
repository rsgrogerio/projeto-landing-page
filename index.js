var leonardo = window.document.getElementById("leonardo")
var bruna = window.document.getElementById("bruna")
var samantha = window.document.getElementById("samantha")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var setaDireita = window.document.getElementById("seta-direita")

function rolaParaDireira() {
    samantha.style ="display:none"
    bruna.style ="display:flex"
    setaDireita.style ="display:none"
    setaEsquerda.style ="display:flex"
}

function rolaParaEsquerda() {
    bruna.style = "display:none"
    samantha.style = "display:flex"
    setaEsquerda.style = "display:none"
    setaDireita.style =  "display:flex"
}

