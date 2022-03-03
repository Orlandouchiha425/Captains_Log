const mongoose=require('mongoose')
const foodLogsSchema=new mongoose.Schema({
  
})

const FoodLog=mongoose.model('FoodLog',foodLogsSchema)
module.exports=FoodLog;