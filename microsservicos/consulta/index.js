const express = require('express')
const app = express()
app.use(express.json())

const funcoes = {
    LembreteCriado: (lembrete) => {
        baseConsulta[lembrete.id] = lembrete
    },
    ObservacaoCriada: (observacao) => {
        const observacoes = baseConsulta[observacao.idLembrete] ['observacoes'] || []
        observacoes.push(observacao)
        baseConsulta[observacao.idLembrete] ['observacoes'] = observacoes
    },
    ObservacaoAtualizada: (observacao) => {
        const observacoes = baseConsulta[observacao.idLembrete]['observacoes']
        const indice = observacoes.findIndex(o => o.id === observacao.id)
        observacoes[indice] = observacao
    }
    //UsuarioCriado: () => {}
}

const baseConsulta = {}

app.get('/lembretes', (req, res) => {
    res.json(baseConsulta)
})

app.post('/eventos', (req, res) => {
    const evento = req.body
    console.log(evento)
    try{
        const funcao = funcoes[evento.tipo]
        funcao(evento.dados)
    }
    catch(e){}
})
const port = 6000
app.listen(port, () => console.log(`Consulta. Porta ${port}.`))