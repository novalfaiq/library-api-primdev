import express from 'express'
import route from './routes/index.routes.js'

const app = express()
const port = 3000

app.use(express.json())
app.use(route)

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})