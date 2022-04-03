const mongoose =require('mongoose');
const url='mongodb+srv://atoloza123:Memoriasuper123@cluster0.wknwa.mongodb.net/tecnicas'


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