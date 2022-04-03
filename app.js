const express =require('express');

const app=express();
const db=require('./db')
app.set('view engine', 'ejs')

app.use(express.urlencoded({extend:true}))
 
app.use(express.json())

app.use(express.static('public'))


const clientes= require('./routes/clientes')
app.use(clientes)

app.get('/',(req, res) =>{
    res.render('registro')

})

app.get('/modificar',(req, res) =>{
    res.render('modificar')

})

// app.post('/crear',(req, res) =>{
    
//     res.send(req.body)

// })


app.set('port',process.env.PORT || 3000)
app.listen(app.get('port'),()=>{
    console.log(`Conectado en el server ${app.get("port")}`)
})