import express from "express"
import cors from "cors"


const app = express()
const port = 3000


app.use(cors());

app.get('/', (req, res) => {
  
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})  