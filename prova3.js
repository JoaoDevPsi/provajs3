function calcularEstatisticasNotas() {
    const numeroAlunos = parseInt(prompt("Digite o número total de alunos na turma:"));
    let somaNotas = 0;
    let maiorNota = Number.MIN_VALUE;
    let menorNota = Number.MAX_VALUE;
  
    for (let i = 0; i < numeroAlunos; i++) {
      const nota = parseFloat(prompt(`Digite a nota do aluno ${i + 1}:`));
      somaNotas += nota;
      maiorNota = Math.max(maiorNota, nota);
      menorNota = Math.min(menorNota, nota);
    }
  
    const media = somaNotas / numeroAlunos;
  
    console.log(`A média da turma é: ${media.toFixed(2)}`);
    console.log(`A maior nota obtida foi: ${maiorNota}`);
    console.log(`A menor nota obtida foi: ${menorNota}`);
  }
  
  calcularEstatisticasNotas();