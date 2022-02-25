require('dotenv').config()
console.log(process.env.MONGO_URI)
const express=require('express')
const app=express();
const port=300;


//Views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


// MIDDLEWARE/definition: User sends request, Middleware runs between controller and callback functions
app.use(express.urlencoded({extended:true}))
app.use((req,res,next)=>{
    console.log(req.body)
    next()
})


//Index
app.get('/logs',(req,res)=>{
    res.render('logs/Index')
})



//New
app.get('/logs/new',(req,res)=>{
    res.render('New')
})



//Delete


//Update



//Create

app.post('/',(req,res)=>{
    if(req.body.shipIsBroken==='on'){
        req.body.shipIsBroken=true
    }else{
        req.body.shipIsBroken=false
    }
    // res.send(req.body)
})


//Edit



//Show


app.listen(port,()=>{
    console.log('i am listening')
})