import { app } from './express'
import dotenv from 'dotenv'

dotenv.config()
const port = isNaN(Number(process.env.PORT)) ? 3333 : Number(process.env.PORT)

app.listen(port, () => {
  console.log(`Server running on port ${port} 🚀`)
})
