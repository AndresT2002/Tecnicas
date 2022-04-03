

const command = require('nodemon/lib/config/command')
const Cliente = require('../model/Cliente')

module.exports.mostrar = async (req, res) => {
    try {

        const clientes = await Cliente.find({}).sort({puntaje: -1 })
        // console.log(clientes)
        return res.render('modificar', { clientes: clientes })
    } catch (err) {
        return res.status(500).json({
            message: "Error mostrando los clientes"
        })
    }

}


module.exports.crearCliente = (req, res) => {

    totalPuntaje = 0
    edadCliente = parseInt(req.body.edad)
    estadoC = req.body.estado
    apto = "No"
    estadoEmpleo = req.body.empleo
    if (edadCliente <= 35) {
        totalPuntaje += 5
    } else {
        totalPuntaje += 2
    }


    if (estadoC == "Casad@") {
        totalPuntaje += 5
    } else {
        totalPuntaje += 2
    }


    if (estadoEmpleo == "Emplead@") {
        totalPuntaje += 5
    } else {
        totalPuntaje += 1
    }

    if (totalPuntaje >= 4) {
        apto = "Si"
    }

    const cliente = new Cliente({

        nombre: req.body.nombre,
        edad: req.body.edad,
        cedula: req.body.cedula,
        telefono: req.body.telefono,
        estadoCivil: req.body.estado,
        estadoTrabajo: req.body.empleo,
        puntaje: totalPuntaje,
        aptoCredito: apto
    })
    cliente.save(function (err, result) {

        if (err) {
            return res.status(500).json({
                message: err.message
            })
        }


        res.redirect('/')

    })
}

module.exports.editar = (req, res) => {
  
    totalPuntaje = 0
    edadCliente = parseInt(req.body.edad_editar)
    console.log(edadCliente)
    estadoC = req.body.estadoC_editar
    apto = "No"
    estadoEmpleo = req.body.estadoT_editar
    if (edadCliente <= 35) {
        totalPuntaje += 5
    } else {
        totalPuntaje += 2
    }


    if (estadoC == "Casad@") {
        totalPuntaje += 5
    } else {
        totalPuntaje += 2
    }


    if (estadoEmpleo == "Emplead@") {
        totalPuntaje += 5
    } else {
        totalPuntaje += 1
    }

    if (totalPuntaje >= 4) {
        apto = "Si"
    }

    const id = req.params.id;
    nombre = req.body.nombre_editar
    edad = req.body.edad_editar
    telefono = req.body.telefono_editar
    estadoCivil = req.body.estadoC_editar
    estadoTrabajo = req.body.estadoT_editar
    puntaje = totalPuntaje

    aptoCredito = apto
    Cliente.findByIdAndUpdate(id, { nombre, edad, telefono, estadoCivil, estadoTrabajo, puntaje, aptoCredito }, (error, cliente) => {
        if (error) {
            return res.status(500).json({
                message: error.message
            })
        }
        res.redirect('/modificar')
    })
}

module.exports.borrar= (req, res) => {

    const id=req.params.id
    console.log(id)
    
    Cliente.findByIdAndRemove(id,(err,cliente) => {
        if (err) {
            return res.status(500).json({
                message: err.message
            })
        }


        res.redirect('/modificar')

    })


}