//Sistema de controle de alunos da escola

let numAlunos = 12;

for (let contador = 0; contador < numAlunos; contador ++) {

    if (contador == 0) {
        console.log(`Número ZERO : ${contador}`)
    } else if (contador % 2 == 0 ) {
            console.log(`Número PAR : ${contador}`)
    } else if(contador % 2 == 1) {
        console.log(`Número IMPAR : ${contador}`)
    }
}


