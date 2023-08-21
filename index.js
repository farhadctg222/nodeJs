const express = require('express')
const app = express()

app.get('/',(req,res)=>{
  res.send('thank you for calling')
})
app.listen(4200,console.log('this is my first node express js 4000'))