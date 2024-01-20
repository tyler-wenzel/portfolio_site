const express = require('express')

const app = express();

const PORT = 3000
const HOST = 'localhost'

app.use(express.static('public'))

app.listen(PORT, HOST, () => {
  console.log("app listening on PORT 3000")
});
