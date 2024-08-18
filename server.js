const express = require("express")
const router = express.Router()
const musics = require('./musics.json')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const musicGetRoute = router.get("/music/:id", (req, res)=>{
    musics.forEach((music)=>{
        if(music.id == req.params.id) {
            music.played = true;
            res.status(200).json(music)
        }
    })
    
    res.status(404).json({message: 'Erro: O recurso não foi localizado, verifique se a solicitação está correta e tente novamente'})
})

const musicsGetRoute = router.get("/musics", (req, res)=>{
    res.status(200).json(musics)
})

const musicPostRoute = router.post("/music", (req, res)=>{
    const music = req.body

    if(typeof music.id == "number" 
    && typeof music.title == "string"
    && typeof music.lyrics == "string"
    && typeof music.played == "boolean" 
    && Object.keys(music).length == 4) {
        musics.push(music)
        res.status(200).json({"message": "A música foi inserida com sucesso, obrigada por colaborar!"})
    }
    else res.status(400).json({"message": "Erro: a solicitação contém sintaxe diferente da esperada, verifique se a solicitação está correta e tente novamente"})
    
})


app.use(musicGetRoute)
app.use(musicsGetRoute)
app.use(musicPostRoute)
app.listen(3333, console.log("Funcionando"))