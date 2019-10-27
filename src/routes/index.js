const express = require('express');
const router = express.Router();

const cancion = require('../models/canciones');

router.get('/', async (req, res) =>{
    const canciones = await cancion.find();
    console.log(canciones);
    res.render('index', {
        canciones
    });
});

router.post('/add', async (req,res) =>{
    const Cancion= new cancion(req.body);
    await Cancion.save();
    res.redirect('/');
});

router.get('/edit/:id', async (req, res) =>{
    const {id} = req.params;
    const Cancion2 = await cancion.findById(id);
    res.render('edit', {
        Cancion2
    });
});

router.post('/edit/:id', async (req, res) =>{
    const {id} = req.params;
    await cancion.update({_id: id}, req.body);
    res.redirect('/');
});

router.get('/delete/:id', async (req, res) =>{
    const {id} = req.params;
    await cancion.remove({_id: id});
    res.redirect('/');
});

module.exports = router;