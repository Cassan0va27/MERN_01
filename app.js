const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');


//Serving Static files
app.use(express.static('public'));



//import Wish
require('./models/wish')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())





//import routes

 require('./routes')(app);


//In case of Prodyction
app.use(express.static('client/build'))
const path = require('path');
app.get('*',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})

//Routing

app.listen(port, () => {
    console.log('Server is running on port' +port);
    console.log('Server ' +process.env.PORT);
})
