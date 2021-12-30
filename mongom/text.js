const mongoose=require('mongoose')
let data=require('mongoose/')

//josn
const fs = require('fs')
const path = require('path')
const configFile = path.resolve(__dirname, './data.json')
const datajj = fs.readFileSync(configFile, 'UTF-8').toString()
//let configjj = JSON.parse(datajj)
//连接
//console.log("数据;"+datajj)

const db=mongoose.createConnection('mongodb://node:123456@localhost:27017/node',{
useNewUrlParser:true,useUnifiedTopology:true},err=>{
if(err){
console.log('数据库连接失败',err)
return
}

console.log('连接成功')
})
const model=db.model('add',{
    
})
const insertObject=new model({

datajj
})
insertObject.save().then(res=>{
    console.log(res)
    db.close
    return res
}).catch(err=>{
    console.log(err)
    db.close
    return false
})