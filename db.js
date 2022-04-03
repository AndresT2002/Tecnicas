const mongoose =require('mongoose');
const url='mongodb://localhost/db_clientes'


mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology:true

})

const db=mongoose.connection


db.on('error',console.error.bind(console,'Error al conectar a MongoDB'))

db.once('open',function callback(){
    console.log("Conectado a MongoDB")
})

module.exports=db