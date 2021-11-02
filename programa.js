let eventos;
if (dataEvento >= 30) {
    console.log("Continuar cadastro")
} else {
    console.log("Data do evento invalido,nao é possivel continuar com cadastro")

    if (inserirIdade >= 18) {
        console.log("Idade valida,continuar com cadastro")
    } else {
        console.log("A idade minima invalida,não é possivel continuar com cadastro")
    }

    if (numeroParticipantes <100) {
        console.log("Há espaço na lista,continuar cadastro")
    } else {
        console.log("Não há espaço na lista,nao é possivel continuar o cadastro")
    }


}

let participantes = ["Renan", "Paulo","Diego","Flavio"]

if (ReceberParticipante) {
    console.log("O participante possui todos requisitos,cadastro concluido com sucesso")
} else {
    console.log("O participante nao possui todos requisitos,não é possivel concluir cadastro")
}

