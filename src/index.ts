import express from 'express'

const app = express()



app.get('/', (req: any, res: any) => {
    res.render('index.ejs', {name: 'Kyle'})
})

app.listen(3001, () =>{
    console.log("started")
})
