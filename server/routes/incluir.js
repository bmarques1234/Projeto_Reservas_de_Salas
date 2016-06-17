var express = require('express');
var incluir = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '192.168.1.117',
    user     : 'me',
    password : 'secret',
    database : 'reservas'
});

var errors = {
    emptyField: {
        message: 'Error'
    }
}

incluir.post('/', function(req, res) {
    if(req.query.hasOwnProperty('Sala') && req.query.hasOwnProperty('Inicio') && req.query.hasOwnProperty('Termino') && req.query.hasOwnProperty('Data')){
<<<<<<< daaf217361d8237eb08967452c4b432433c83f78
<<<<<<< 5ca5a2d44708b3aae069bf66c7c554cb5bfdb86a
<<<<<<< 2cc7f389967be24a7b1140ee05d852ef2660eb47
<<<<<<< 9dc861cab1b6c68f9b89bba88d861a1fdb0aa179
<<<<<<< fdfb595b73e6e0f3b35c03e4ce15ab45bd718d4b
=======
=======
<<<<<<< 9e9e2655fba1bc7bf310768eb5f1a9747ecf7f43
>>>>>>> validação
<<<<<<< b10bea667334b0488f9129a2d87609396e9dccbe
>>>>>>> validação incluir
=======
>>>>>>> ajustes pull
        var inicio = req.query.Inicio.replace(/[:-]/g, '');
        var termino = req.query.Termino.replace(/[:-]/g, '');
        var data = req.query.Data.replace(/[:-]/g, '');
        var flagError = false;
        if(inicio.length>=5 && termino.length>=5 && data.length==8 && req.query.Sala.length==1 && parseInt(req.query.Inicio, 10)!='NaN' && parseInt(req.query.Termino, 10)!='NaN' && parseInt(req.query.Data, 10)!='NaN' && parseInt(req.query.Sala, 10)!='NaN'){
            connection.query('SELECT * FROM reservas WHERE Sala = ? AND Data = ?', [parseInt(req.query.Sala, 10), parseInt(req.query.Data, 10)], function(err, result){
                if (err) throw err;
                for(var x=0;x<result.length;x++){
                    var inicioReuniao = result[x].Inicio.replace(/[:-]/g, '');
                    var terminoReuniao = result[x].Termino.replace(/[:-]/g, '');
                    if(inicio>=inicioReuniao && inicio<terminoReuniao){
                        flagError = true;
                        x=result.length+1;
                    }
                    else if(termino>inicioReuniao && termino <=terminoReuniao){
                        flagError = true;
                        x=result.length+1;
                    }
                    else if(inicio<=inicioReuniao && termino>=terminoReuniao){
                        flagError = true;
                        x=result.length+1;
                    }
                }
                if(!flagError){
                    connection.query('INSERT INTO reservas SET ?', req.query, function(err, result){
                        if (err) throw err;
                        console.log('Inserted, ID=' + result.insertId);
                    });
                    res.sendStatus(200);
                }
                else {
                    console.log('Failed to insert, already exist reserve');
                    res.type('text/json');
                    res.status(403).send(errors.emptyField);
                }
            });
        }
        else {
            console.log('Failed to insert, incorrect fields');
            res.type('text/json');
            res.status(403).send(errors.emptyField);
        }
<<<<<<< daaf217361d8237eb08967452c4b432433c83f78
=======
        var inicio = req.query.Inicio.replace(/[:-.,]/g, '');
        var termino = req.query.Termino.replace(/[:-.,]/g, '');
        var data = req.query.Data.replace(/[:-.,]/g, '');
<<<<<<< 5ca5a2d44708b3aae069bf66c7c554cb5bfdb86a
<<<<<<< 2cc7f389967be24a7b1140ee05d852ef2660eb47
=======
>>>>>>> validação
=======
        var inicio = req.query.Inicio.replace(/[:-]/g, '');
        var termino = req.query.Termino.replace(/[:-]/g, '');
        var data = req.query.Data.replace(/[:-]/g, '');
>>>>>>> validação
<<<<<<< 5ca5a2d44708b3aae069bf66c7c554cb5bfdb86a
        var flagError = false;
        if(inicio.length>=5 && termino.length>=5 && data.length==8 && req.query.Sala.length==1 && parseInt(req.query.Inicio, 10)!='NaN' && parseInt(req.query.Termino, 10)!='NaN' && parseInt(req.query.Data, 10)!='NaN' && parseInt(req.query.Sala, 10)!='NaN'){
            connection.query('SELECT * FROM reservas WHERE Sala = ? AND Data = ?', [parseInt(req.query.Sala, 10), parseInt(req.query.Data, 10)], function(err, result){
                if (err) throw err;
                for(var x=0;x<result.length;x++){
                    var inicioReuniao = result[x].Inicio.replace(/[:-]/g, '');
                    var terminoReuniao = result[x].Termino.replace(/[:-]/g, '');
                    if(inicio>=inicioReuniao && inicio<terminoReuniao){
                        flagError = true;
                        x=result.length+1;
                    }
                    else if(termino>inicioReuniao && termino <=terminoReuniao){
                        flagError = true;
                        x=result.length+1;
                    }
                    else if(inicio<=inicioReuniao && termino>=terminoReuniao){
                        flagError = true;
                        x=result.length+1;
                    }
                }
                if(!flagError){
                    connection.query('INSERT INTO reservas SET ?', req.query, function(err, result){
                        if (err) throw err;
                        console.log('Inserted, ID=' + result.insertId);
                    });
                    res.sendStatus(200);
                }
                else {
                    console.log('Failed to insert, already exist reserve');
                    res.type('text/json');
                    res.status(403).send(errors.emptyField);
                }
<<<<<<< 9dc861cab1b6c68f9b89bba88d861a1fdb0aa179
=======
=======
>>>>>>> validação
        var flagError = false;
        if(inicio.length>=5 && termino.length>=5 && data.length==8 && req.query.Sala.length==1 && parseInt(req.query.Inicio, 10)!='NaN' && parseInt(req.query.Termino, 10)!='NaN' && parseInt(req.query.Data, 10)!='NaN' && parseInt(req.query.Sala, 10)!='NaN'){
            connection.query('SELECT * FROM reservas WHERE Sala = ? AND Data = ?', [parseInt(req.query.Sala, 10), parseInt(req.query.Data, 10)], function(err, result){
                if (err) throw err;
                for(var x=0;x<result.length;x++){
                    var inicioReuniao = result[x].Inicio.replace(/[:-]/g, '');
                    var terminoReuniao = result[x].Termino.replace(/[:-]/g, '');
                    if(inicio>=inicioReuniao && inicio<terminoReuniao){
                        flagError = true;
                        x=result.length+1;
                    }
                    else if(termino>inicioReuniao && termino <=terminoReuniao){
                        flagError = true;
                        x=result.length+1;
                    }
                    else if(inicio<=inicioReuniao && termino>=terminoReuniao){
                        flagError = true;
                        x=result.length+1;
                    }
                }
                if(!flagError){
                    connection.query('INSERT INTO reservas SET ?', req.query, function(err, result){
                        if (err) throw err;
                        console.log('Inserted, ID=' + result.insertId);
                    });
                    res.sendStatus(200);
                }
                else {
                    console.log('Failed to insert, already exist reserve');
                    res.type('text/json');
                    res.status(403).send(errors.emptyField);
                }
<<<<<<< 5ca5a2d44708b3aae069bf66c7c554cb5bfdb86a
>>>>>>> validação incluir
=======
<<<<<<< 9e9e2655fba1bc7bf310768eb5f1a9747ecf7f43
>>>>>>> validação
            }
            if(!flagError){
                connection.query('INSERT INTO reservas SET ?', req.query, function(err, result){
                    if (err) throw err;
                    console.log('Inserted, ID=' + result.insertId);
                });
                res.sendStatus(200);
            }
        });
>>>>>>> validação incluir
<<<<<<< 2cc7f389967be24a7b1140ee05d852ef2660eb47
    }
    else {
        console.log('Failed to insert, insuficient query');
        res.type('text/json');
        res.status(403).send(errors.emptyField);
    }
});

incluir.put('/', function(req, res) {
    if(req.query.hasOwnProperty('Sala') && req.query.hasOwnProperty('Inicio') && req.query.hasOwnProperty('Termino') && req.query.hasOwnProperty('Data')){
        var inicio = req.query.Inicio.replace(/[:-]/g, '');
        var termino = req.query.Termino.replace(/[:-]/g, '');
        var data = req.query.Data.replace(/[:-]/g, '');

        /*var id = parseInt(req.query.ID, 10);
        console.log(typeof(id));
        console.log(id);
        if(id!=NaN){
            console.log('Failed to insert, invalid ID');
            res.type('text/json');
            res.status(403).send(errors.emptyField);
        }*/

        var flagError = false;
        if(inicio.length>=5 && termino.length>=5 && data.length==8 && req.query.Sala.length==1 && parseInt(req.query.Inicio, 10)!='NaN' && parseInt(req.query.Termino, 10)!='NaN' && parseInt(req.query.Data, 10)!='NaN' && parseInt(req.query.Sala, 10)!='NaN'){
            connection.query('SELECT * FROM reservas WHERE Sala = ? AND Data = ?', [parseInt(req.query.Sala, 10), parseInt(req.query.Data, 10)], function(err, result){
                if (err) throw err;
                for(var x=0;x<result.length;x++){
                    var inicioReuniao = result[x].Inicio.replace(/[:-]/g, '');
                    var terminoReuniao = result[x].Termino.replace(/[:-]/g, '');
                    if(inicio>=inicioReuniao && inicio<terminoReuniao){
                        flagError = true;
                        x=result.length+1;
                    }
                    else if(termino>inicioReuniao && termino <=terminoReuniao){
                        flagError = true;
                        x=result.length+1;
                    }
                    else if(inicio<=inicioReuniao && termino>=terminoReuniao){
                        flagError = true;
                        x=result.length+1;
                    }
                }
                if(!flagError){
                    connection.query('UPDATE reservas SET ? WHERE ID = ?', [req.query, req.query.ID], function(err, result){
                        if (err) throw err;
                        console.log('Updated, ID=' + req.query.ID);
                    });
                    res.sendStatus(200);
                }
                else {
                    console.log('Failed to insert, already exist reserve');
                    res.type('text/json');
                    res.status(403).send(errors.emptyField);
                }
=======
>>>>>>> validação
            });
        }
        else {
            console.log('Failed to insert, incorrect fields');
            res.type('text/json');
            res.status(403).send(errors.emptyField);
        }
=======
>>>>>>> validação incluir
    }
    else {
        console.log('Failed to insert, insuficient query');
        res.type('text/json');
        res.status(403).send(errors.emptyField);
    }
});

incluir.put('/', function(req, res) {
    if(req.query.hasOwnProperty('Sala') && req.query.hasOwnProperty('Inicio') && req.query.hasOwnProperty('Termino') && req.query.hasOwnProperty('Data')){
        var inicio = req.query.Inicio.replace(/[:-]/g, '');
        var termino = req.query.Termino.replace(/[:-]/g, '');
        var data = req.query.Data.replace(/[:-]/g, '');

        /*var id = parseInt(req.query.ID, 10);
        console.log(typeof(id));
        console.log(id);
        if(id!=NaN){
            console.log('Failed to insert, invalid ID');
            res.type('text/json');
            res.status(403).send(errors.emptyField);
        }*/

        var flagError = false;
        if(inicio.length>=5 && termino.length>=5 && data.length==8 && req.query.Sala.length==1 && parseInt(req.query.Inicio, 10)!='NaN' && parseInt(req.query.Termino, 10)!='NaN' && parseInt(req.query.Data, 10)!='NaN' && parseInt(req.query.Sala, 10)!='NaN'){
            connection.query('SELECT * FROM reservas WHERE Sala = ? AND Data = ?', [parseInt(req.query.Sala, 10), parseInt(req.query.Data, 10)], function(err, result){
                if (err) throw err;
                for(var x=0;x<result.length;x++){
                    var inicioReuniao = result[x].Inicio.replace(/[:-]/g, '');
                    var terminoReuniao = result[x].Termino.replace(/[:-]/g, '');
                    if(inicio>=inicioReuniao && inicio<terminoReuniao){
                        flagError = true;
                        x=result.length+1;
                    }
                    else if(termino>inicioReuniao && termino <=terminoReuniao){
                        flagError = true;
                        x=result.length+1;
                    }
                    else if(inicio<=inicioReuniao && termino>=terminoReuniao){
                        flagError = true;
                        x=result.length+1;
                    }
                }
                if(!flagError){
                    connection.query('UPDATE reservas SET ? WHERE ID = ?', [req.query, req.query.ID], function(err, result){
                        if (err) throw err;
                        console.log('Updated, ID=' + req.query.ID);
                    });
                    res.sendStatus(200);
                }
                else {
                    console.log('Failed to insert, already exist reserve');
                    res.type('text/json');
                    res.status(403).send(errors.emptyField);
                }
=======
>>>>>>> validação
            });
        }
        else {
            console.log('Failed to insert, incorrect fields');
            res.type('text/json');
            res.status(403).send(errors.emptyField);
        }
=======
>>>>>>> ajustes pull
    }
    else {
        console.log('Failed to insert, insuficient query');
        res.type('text/json');
        res.status(403).send(errors.emptyField);
    }
});

incluir.put('/', function(req, res) {
    if(req.query.hasOwnProperty('Sala') && req.query.hasOwnProperty('Inicio') && req.query.hasOwnProperty('Termino') && req.query.hasOwnProperty('Data')){
        var inicio = req.query.Inicio.replace(/[:-]/g, '');
        var termino = req.query.Termino.replace(/[:-]/g, '');
        var data = req.query.Data.replace(/[:-]/g, '');

        /*var id = parseInt(req.query.ID, 10);
        console.log(typeof(id));
        console.log(id);
        if(id!=NaN){
            console.log('Failed to insert, invalid ID');
            res.type('text/json');
            res.status(403).send(errors.emptyField);
        }*/

        var flagError = false;
        if(inicio.length>=5 && termino.length>=5 && data.length==8 && req.query.Sala.length==1 && parseInt(req.query.Inicio, 10)!='NaN' && parseInt(req.query.Termino, 10)!='NaN' && parseInt(req.query.Data, 10)!='NaN' && parseInt(req.query.Sala, 10)!='NaN'){
            connection.query('SELECT * FROM reservas WHERE Sala = ? AND Data = ?', [parseInt(req.query.Sala, 10), parseInt(req.query.Data, 10)], function(err, result){
                if (err) throw err;
                for(var x=0;x<result.length;x++){
                    var inicioReuniao = result[x].Inicio.replace(/[:-]/g, '');
                    var terminoReuniao = result[x].Termino.replace(/[:-]/g, '');
                    if(inicio>=inicioReuniao && inicio<terminoReuniao){
                        flagError = true;
                        x=result.length+1;
                    }
                    else if(termino>inicioReuniao && termino <=terminoReuniao){
                        flagError = true;
                        x=result.length+1;
                    }
                    else if(inicio<=inicioReuniao && termino>=terminoReuniao){
                        flagError = true;
                        x=result.length+1;
                    }
                }
                if(!flagError){
                    connection.query('UPDATE reservas SET ? WHERE ID = ?', [req.query, req.query.ID], function(err, result){
                        if (err) throw err;
                        console.log('Updated, ID=' + req.query.ID);
                    });
                    res.sendStatus(200);
                }
                else {
                    console.log('Failed to insert, already exist reserve');
                    res.type('text/json');
                    res.status(403).send(errors.emptyField);
                }
            });
        }
        else {
            console.log('Failed to insert, incorrect fields');
            res.type('text/json');
            res.status(403).send(errors.emptyField);
        }
    }
    else {
        console.log('Failed to insert, insuficient query');
        res.type('text/json');
        res.status(403).send(errors.emptyField);
    }
});

module.exports = incluir;