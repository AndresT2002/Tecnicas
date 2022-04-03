const mongoose= require("mongoose")

const Schema=mongoose.Schema

const clienteSchema=new Schema({
    nombre:String,
    edad:Number,
    cedula:Number,
    telefono:Number,
    estadoCivil:String,
    estadoTrabajo:String,
    puntaje:Number,
    aptoCredito:String


},{versionKey:false})

module.exports=mongoose.model('db_clientes',clienteSchema)