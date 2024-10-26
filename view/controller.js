const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
const models = require('./models');
let port = process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log("Servidor rodando!")
})

app.get('/', (req, res)=>{
    res.send('Servidor backend já está rodando!');
});

let usuario = models.Usuario;

app.get('/createUser', async(req, res)=>{
    let create = await usuario.create({
        nome: req.body.nome,
        password: req.body.password,
        createdAT: new Date(),
        updateAT: new Date()
    });
});

app.get('/read', async(req, res)=>{
    let read=await user.findALL({
        raw:true,
    });
    console.log(read);
    res = read;
});

app.get('/update', async(req, res)=>{
    let update=await user.findByPk(4).then((response)=>{
        response.name="Dérick";
        response.save();
    }) ;
    console.log(update);
});    

app.get('/delete', async(req, res)=>{
    user.destroy({
        where: {id:2}
    });
});

app.post('/login', async(req, res)=>{
    let response=await user.findOne({
        where:{nome:req.body.nome, password: req.body.password}
    });
    if(response === null){
        req.send(JSON.stringify('error'));
    }else{
        res.send(response);
    }
});

