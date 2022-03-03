require('dotenv').config()
console.log(process.env.MONGO_URI)
const express=require('express')
const app=express()
const foodLog= require('/models/foodlogs')
const mongoose=require('mongoose')

const port=3001;
//REACT

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//Ignore Errors
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})


//Middleware

//INDEX

app.get('/foodlogs',(req,res)=>{
    console.log( `I am running in ${port}` )
})

//NEW



//DELETE


//UPDATE


//CREATE


//EDIT


//SHOW


app.listen(port,()=>{
    console.log(`i am listening foodlogs on  ${port}`)
})