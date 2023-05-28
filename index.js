const express= require('express')
const app=express()
const port =8000


app.listen(port,(e)=>{
    if(e){
        console.log('server error',e);
        return
    }
  console.log('server is runing');
})