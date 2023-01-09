const express=require('express');
const fs=require('fs');


const O = require('./Objectife');


const  app= express()

const PORT=6300;

app.get('/',O,(req,res)=>{
    fs.readFile('./Homepage.html','utf-8',(err,data)=>{
        err?res.end('file not found')&&console.error(err) :res.end(data);

    }
    )
})



    app.get('/Homepage.html',O,(req,res)=>{
        fs.readFile('./Homepage.html','utf-8',(err,data)=>{
            err?res.end('file not found')&&console.error(err) :res.end(data);
    
        }
        )
    })

app.get('/Nos service.html',O,(req,res)=>{
    fs.readFile('./Nos service.html','utf-8',(err,data) =>{
        err?res.end('file not found')&&console.error(err) :res.end(data);
    })
})



app.get('/Contactus.html',O,(req,res)=>{
    fs.readFile('./Contactus.html','utf-8',(err,data)=>{
        err?res.end('file not found')&&console.error(err) :res.end(data);
    })
})


    

app.listen(PORT,(req,res)=>{
    console.log(`|server running : port ${PORT}...`)
})

