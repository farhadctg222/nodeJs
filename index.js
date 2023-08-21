const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
app.use(cors())

app.use(bodyParser.json())






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
app.post('/adduser',(req,res)=>{
  const eee = req.body
  eee.id = 55
  res.send(eee)
})
app.listen(4000,console.log('this is my first node express js 4000'))