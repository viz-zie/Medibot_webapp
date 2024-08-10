import express from "express"
import cors from "cors"


const app = express()
const port = 3000


app.use(cors());

app.get('/', (req, res) => {
  res.send("<h1>hello</h1>")
})

app.get('/loginpage', (req, res) => {
  res.sendStatus(201);
})


app.get('/vendorpage', (req, res) => {
  res.sendStatus(201);
})

app.get('/medicinepage', (req, res) => {
  res.sendStatus(201);
})


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})  