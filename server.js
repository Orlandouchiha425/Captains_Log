require('dotenv').config()
console.log(process.env.MONGO_URI)
const express=require('express')
const app=express();
const port=3000;
const Log =require('./models/logs')
const mongoose=require('mongoose')
const methodOverride=require('method-override')
//Views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


//connect mongoose
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

// MIDDLEWARE/definition: User sends request, Middleware runs between controller and callback functions
app.use(express.urlencoded({extended:true}))
app.use((req,res,next)=>{
    console.log(req.body)
    next()
})


//Index
app.get('/logs',(req,res)=>{
    // res.render('logs/Index')
    Log.find({}, (err, foundLogs)=>{
        if(err){
            res.status(400).send(err)
        }else{
            res.render('Index',{
                logs:foundLogs
            })
        }

    })

})



//New
app.get('/logs/new',(req,res)=>{
    res.render('New')
})



//Delete
app.delete('/logs/:id',(req,res)=>{
    Log.findByIdAndDelete(req.params.id,(err,deletedLog)=>{
        if(!err){
            res.redirect('/logs')
        }else{
            res.status(400).send(err)
        }
    })
})

//Update



//Create

app.post('/logs',(req,res)=>{
    if(req.body.shipIsBroken==='on'){
        req.body.shipIsBroken=true
    }else{
        req.body.shipIsBroken=false
    }

    Log.create(req.body,(err, createdLog)=>{
        if(err){ 
            res.status(400).send(err)
        }else{ 
            console.log(createdLog)
            res.redirect('/logs')
        }
    })
    // res.send(req.body)
})


//Edit



//Show
app.get('/logs/:id',(req,res)=>{
    Log.findById(req.params.id, (err,foundLogs)=>{
        if (err){
            res.status(400).send(err)
        }else{
            res.render('Show',{
                log:foundLogs
            })
        }
    })
})


//port
app.listen(port,()=>{
    console.log(`i am listening on ${port}`)
})