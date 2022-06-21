const express = require('express')
const rotas = express.Router()

let cursos_info = [
    {'curso': 'node js','info': 'curso de node js'},
    {'curso': 'react','info': 'curso de react'},
    {'curso': 'java','info': 'curso de java'},
    {'curso': 'arduino','info': 'curso de arduino'}
]

rotas.get('/', (requisição, resposta) => {
    resposta.json({olá: 'Seja bem-vindo(a)!'})
})

//Passagem de parâmetros para rotas ('/'):

rotas.get('/:cursoid', (requisição, resposta) => {
    const curso = requisição.params.cursoid //Capturando o parâmetro passado através da rota.
    const curso_info = cursos_info.find(i => i.curso == curso)

    if (!curso_info) {
        resposta.status(404).json({erros: 'Curso não encontrado.', curso_pesquisado: curso})
    }

    else {
        resposta.status(200).json(curso_info)
    }
})

module.exports = rotas