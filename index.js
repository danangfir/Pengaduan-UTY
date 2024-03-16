const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res)=>{
    res.send('Hai :3')
})

app.listen(PORT, () =>{
    console.log('App is listening at http://localhost:${PORT}')
})