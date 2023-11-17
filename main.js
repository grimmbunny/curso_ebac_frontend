
let alunos = [];

console.log(alunos);


alunos.push({nome: 'Paulo', nota: 5})
alunos.push({nome: 'Gustavo', nota: 8})
alunos.push({nome: 'Michele', nota: 4})
alunos.push({nome: 'Laila', nota: 6})

console.log(alunos);

function filtraAlunosNotaSeisOuMais(aluno) {
    return aluno.nota >= 6;
}

const notaSeisOuMais = alunos.filter(filtraAlunosNotaSeisOuMais)

console.log(notaSeisOuMais);
