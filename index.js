const express = require('express')
const app = express()
const users = ["farhad","rakib","somaya","susmita"]

app.get('/mongo/friuts',(req,res)=>{
  const friuts={
    name:'fruts',
    quantiti: 200,
    price: 1000
  }
  res.send(friuts)
})
app.get('/users/:id',(req,res)=>{
  const userId = req.params.id
  const userName = users[userId]
  res.send({userId,userName})
})
app.listen(4000,console.log('this is my first node express js 4000'))