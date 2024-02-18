const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (false) throw('health check returning failure')
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('21') // change this string to ensure a new version deployed
})
