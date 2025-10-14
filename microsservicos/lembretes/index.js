const axios = require ('axios')
const express = require('express')
const app = express()
//middleware
app.use(express.json())
/*
{
    1: {
        id: 1,
        texto: 'fazer café'
    },
    2: {
        id: 2,
        texto: 'ir à freira'
    }
}
*/
const baseLembretes = {}
//GET localhost:4000/lembretes
//aqui você obtém a lista
app.get('/lembretes', (req, res) => {
    res.json(baseLembretes)
})
let id = 1
/*POST localhost:4000/lembretes
//aqui você cadastra um lembrete
{
    texto: "fazer café"
}*/

app.post('/lembretes', (req, res) => {
    const {texto} = req.body
    const lembrete = {id, texto}
    baseLembretes[id] = lembrete
    id++
    axios.post('http://localhost:10000/eventos', {
        tipo: 'LembreteCriado',
        dados: lembrete
    })
    res.json(lembrete)
})

app.post('/eventos', (req, res) => {
    const evento = req.body
    console.log(evento)
    res.status(200).end()
})

const port = 4000
app.listen(
    port, 
    () => console.log(`Lembretes. Porta ${port}.`)
)