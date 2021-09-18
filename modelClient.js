const mongoose=require('mongoose');
const schema=mongoose.Schema;

const clientSchema=new schema({
email:String,
sujet:String,
message:String

})

const client=mongoose.model('clients', clientSchema);
module.exports=client;



