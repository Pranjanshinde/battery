const mongoose=require("mongoose");

const Todoschema=mongoose.Schema({
    title : String,
    desc : String,
    date : String,
    status:String,
    user_id:String,
    image:String
});

const Todomodel=mongoose.model("todo",Todoschema);

module.exports={Todomodel};