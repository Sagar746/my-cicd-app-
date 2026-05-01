const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello from my CI/CD app!')
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})