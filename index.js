// Base a ser utilizada
const alunosDaEscola = [
    { nome:"Henrique",notas:[],cursos:[],faltas:5 },
    { nome:"Edson", notas:[], cursos:[], faltas:2},
    { nome:"Bruno", notas:[10,9.8,9.6], cursos:[], faltas:0 },
    { nome:"Guilherme", notas:[10,9.8,9.6], cursos:[{ nomeDoCurso:"Full Stack",dataMatricula:new Date }], faltas:0 },
    { nome:"Carlos", notas:[], cursos:[], faltas:0 },
    { nome:"Lucca", notas:[10,9.8,9.6], cursos:[{ nomeDoCurso:"UX", dataMatricula:new Date}],faltas:0 }
];

// implementação

//Verifica se o nome passado possui cadastro no sistema
const possuiCadastro = nomeAluno => {
    if(typeof(nomeAluno) == 'string'){
        let achou = alunosDaEscola.findIndex(aluno => aluno.nome.toUpperCase() === aluno.nome.toUpperCase());
        return achou >= 0 ? true : false;         
    } else {        
        return console.log('O NOME DEVE SER UMA STRING!\n');         
    }    
}

const estaMatriculado = aluno => {    
        let idAluno = alunosDaEscola.findIndex(elem => elem.nome.toUpperCase() === aluno.nome.toUpperCase());
        return alunosDaEscola[idAluno].cursos.length > 0 ? true : false;
}

//Essa função irá receber uma *string* que é nome do aluno a ser criado. E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos. A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.
const adicionarAluno = nomeAluno => {    
    if(typeof(nomeAluno) == 'string'){
        alunosDaEscola.push({nome:nomeAluno,notas:[],cursos:[],faltas:0});
        console.log('Adicionado com sucesso');
    }else{
        console.log('Erro ao cadastrar Aluno. Nome deve ser uma String!');
    }
}

//Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. Vale dizer que As informações deverão ser exibidas em um formato amigável.
const listarAlunos = () => {
    console.log('\n                 ALUNOS CADASTRADOS                         ');
    console.log('==========================================================');
    console.log('  ID    NOME                                       ');
    console.log('==========================================================');
    
    alunosDaEscola.forEach((aluno,i) => {
        console.log(`  ${i+1}    ${aluno.nome}`);
        console.log('==========================================================');
    });
    console.log('\n');
}

//Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno.
const buscarAluno = nomeAluno => {    
    if(typeof(nomeAluno) == 'string'){        
        return possuiCadastro(nomeAluno) ? console.log(`O ALUNO DE NOME ${nomeAluno} FOI ENCONTRADO!\n`) : console.log(`O ALUNO ${nomeAluno} NÃO FOI ENCONTRADO!\n`);         
    } else {
        return console.log(`Erro ao buscar o Aluno de nome ${nomeAluno}. O nome deve ser uma String!\n`);
    }
}

//Essa funcionalidade irá permitir, cadastrar um aluno em um curso. Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
const matricularAluno = (aluno, curso) => {
    if(typeof(aluno) == 'object'){
        if( possuiCadastro(aluno.nome) ){
            aluno.cursos.push({nomeDoCurso:curso, dataMatricula:new Date})
            console.log(`O aluno ${aluno.nome} FOI MATRICULADO COM SUCESSO NO CURSO ${curso}!\n`);
        } else {
            console.log(`O aluno ${aluno.nome} NÃO ESTÁ CADASTRADO NO SISTEMA!\n`);
        }
    }    
}

//Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
const aplicarFalta = aluno => {
    if(typeof(aluno) == 'object'){
        if( possuiCadastro(aluno.nome) && estaMatriculado(aluno.nome)) {
            aluno.faltas++;
        } else {
            return console.log(`O aluno ${aluno.nome} NÃO ESTÁ MATRICULADO EM NENHUM CURSO!\n`);
        }    
    } else {
        return console.log(`O ALUNO NÃO ESTÁ MATRICULADO EM NENHUM CURSO!\n`);
    }
}

//Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
const aplicarNota = (aluno,nota) => {
    if(typeof(aluno) == 'object'){
        if( possuiCadastro(aluno.nome) ){
            if(estaMatriculado(aluno)){
                aluno.notas.push(nota)
                console.log(`NOTA ${nota} CADASTRADA PARA O ALUNO ${aluno.nome} COM SUCESSO!\n`);
            }
            
        } else {
            console.log(`O ALUNO NÃO ESTÁ CADASTRADO NO SISTEMA!\n`);
        }

    } else {
        console.log(`O ALUNO NÃO ESTÁ CADASTRADO NO SISTEMA!\n`);
    }

}



//adicionarAluno('Ricardo')
//listarAlunos()
//buscarAluno(1)
//matricularAluno(alunosDaEscola[0], 'JAVASCRIPT')
//aplicarFalta(alunosDaEscola[0])
aplicarNota(alunosDaEscola[0],'9.8,10,7.5,5.7')
console.log(alunosDaEscola[0])