const mongoose=require('mongoose')

//连接
const db=mongoose.createConnection('mongodb://node:123456@localhost:27017/node',{
useNewUrlParser:true,useUnifiedTopology:true},err=>{
if(err){
console.log('数据库连接失败',err)
return
}

console.log('连接成功')
})
const model=db.model('api',{
    uname:{type:String},
    age:{type:Number}
})
const insertObject=new model({

    uname: "uu1",
    age:232

})
insertObject.save().then(res=>{
    console.log(res)
    return res
}).catch(err=>{
    console.log(err)
    return false
})