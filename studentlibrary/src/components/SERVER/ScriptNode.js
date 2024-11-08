const express = require('express')
const app = express()
const cors = require('cors');
const connectDatabase = require('../Database/Database') 
const { default: mongoose } = require('mongoose')
connectDatabase()
app.use(cors())
app.use(express.json())
const userSchema = new mongoose.Schema({
     name  : String,
     email : String,
     photo:String,
     video:String           
})
const User = mongoose.model('studentdata',userSchema)
const bookSchema = new mongoose.Schema({
   bookName  : String,
   authorName : String,
   startDate:String,
   endDate:String          
})
const Book = mongoose.model('bookdata',bookSchema)
app.post('/student',async(req,res) =>{
   try
   { 
     const newUser = new User(req.body) 
     await newUser.save()
     res.status(201).json({message:"user adding succesfully"}) 
   }
   catch(err){
        console.error("Server error: ", err);
        res.status(500).json({ error: "Failed to add user" });
     }    
  })  
app.post("/book",async(req,res) =>{
   try{
   const newUser =new Book(req.body)
   await newUser.save()
   res.status(201).json({message:"user added succesfully"})
   }
   catch(err){
        console.error("server error",err)
        res.status(500).json({error:"failed to add user"})
   }
   
})
app.get('/library',async (req,res)=>{   
      try{      
        const studentData = await User.find({})
        const bookData = await Book.find({})
      //   res.send(bookData)
      //   res.send(studentData)
        res.json({Books:bookData,Students:studentData})
     }
     catch(error){
        res.status(500).json({error: "Failed to fetch user"})
     }    
})
app.listen(8000,()=>{
    console.log("server is running Sucessfully")
})
