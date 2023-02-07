import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import gameRouter from './routes/game'
import authRouter from './routes/auth'
import orderRouter from './routes/order'
import db from './config/mongo'

const PORT = 3001
const app = express()

app.use(cors())
app.use(express.json())
app.use('/game', gameRouter)
app.use('/auth', authRouter)
app.use('/order', orderRouter)

db().then(() => console.log('db connection ready'))
app.listen(PORT, () => console.log('server running! in port ' + PORT))
