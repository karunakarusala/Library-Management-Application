const mongoose = require('mongoose')
const connectDatabase = async () =>{
    try{       
        await mongoose.connect('mongodb+srv://karunakarusala:uluwIFZzuKm41iNf@karunakarusala.k7o88.mongodb.net/STUDENTLIBRARY')                
        console.log("connected db succesfully")
    }
    catch (err) {
        console.log(err.message)
    }
}
module.exports = connectDatabase;
//mongodb+srv://karunakarusala:uluwIFZzuKm41iNf@karunakarusala.k7o88.mongodb.net/