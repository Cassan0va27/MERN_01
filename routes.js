const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {mongourl} = require('./config/keys');
const Wish = mongoose.model('wishes');


mongoose.connect(mongourl, {useUnifiedTopology: true,  useNewUrlParser: true } );

module.exports = (app)=> {



    app.post('/sent', (req,res) =>{

        const Item = new Wish({
            wish: req.body.item
        });
        Item.save().then(data => {
            console.log('Saved');
            res.send(data);
        })
        // console.log(req.body.item);
        // data.push(req.body.item);
        // res.send(data);
   })


   //Get routes

    app.get('/data', (req,res) => {
        Wish.find({}).then(data=> {
            console.log(data);
            res.send(data);
           // res.render('home', {wish: data})
        })
        
    })
    
    app.get('/about', (req,res) => {
        res.render('about')
    })

    //Delete Routes

    app.delete('/remove/:id', (req,res) => {

        Wish.findOneAndDelete({_id: req.params.id}).then(data => {
            console.log('Deleted');
            res.send(data)
        })
        // data = data.map(item=> {
        //     if(item!=req.params.id)
        //     {
        //         return item;
        //     }
        // })
        // res.send(data);
    })
    
}

