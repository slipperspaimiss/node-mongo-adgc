const mongoose=require('mongoose')

//连接
const db2=mongoose.createConnection('mongodb://node:123456@localhost:27017/node',{
useNewUrlParser:true,useUnifiedTopology:true},err=>{
if(err){
console.log('数据库连接失败',err)
return
}

console.log('连接成功')
})
const model2=db2.model('api',{
    uname:{type:String},
    age:{type:Number}
})
model2.find({}).then(res=>{
console.log(res)
db2.close
}).catch(err=>{
console.log(err)
})
