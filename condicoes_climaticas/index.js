require('dotenv').config()
//operador de desestruturação JS

const{
    APPID,
    PROTOCOL,
    BASE_URL,
    Q,
    CNT,
    UNITS,
    IDIOM: LANG
} = process.env

const url = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&q=${Q}&cnt=${CNT}&units=${UNITS}&lang=${LANG}`

async function comAsyncAwait(){
    try{
        const result = await axios.get(url)
        console.log(result)
        console.log('****************************')
        console.log('Agora o data')
        console.log(result.data)
        console.log('*************************')
        console.log('Agora o list')
        console.log(result.data.list)
        //iterar sobre a lista, mostrando a sensação térmica de cada previsão e mostrar também o nível do mar
    }
    catch(e){
        console.log(e)
    }
}
comAsyncAwait()

/*const teste = () => {
    return 1
}
//console.log(teste())
teste().then(res => console.log(res))*/

/*axios.get(url)
.then((res) => {
    console.log('Exibindo o corpo da resposta...')
    console.log(res.data)
    console.log('*************************')
    return res.data.list
    //console.log('Exibindo o dt')
    //console.log(new Date(Number(res.data.list[0].dt)*1000))
})
.then((res) => {
    console.log('Exibindo a lista inteira')
    console.log(res)
    console.log('*************************')
})
.then((res) => {
    console.log('Iterando sobre a lista')
    for(let previsao of res){
        //data
        console.log(`dt: ${new Date(previsao.dt * 100).toLocaleString()}`)
        console.log(`Temp min: ${previsap.main.temp_min}`)
        console.log(`Descrição: ${previsao.weather[0].description}`)
    }
})*/