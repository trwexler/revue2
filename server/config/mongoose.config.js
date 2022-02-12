const mongoose = require('mongoose');
// const uri = process.env.ATLAS_URI;

module.exports = () => {
    mongoose.connect( "mongodb://localhost/newrevue", { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        
    })
        .then(() => {
            console.log("Established a connection to the database")
            
        })  
        .catch(err => console.log("Something went wrong when connecting to the database", err));

}



