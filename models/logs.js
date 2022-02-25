const mongoose=require('mongoose')


const logsSchema=new mongoose.Schema({
    title:String,
    entry: String,
    shipIsBroke:Boolean,
})

const Log=mongoose.model('Log',logsSchema)

module.exports=Log;