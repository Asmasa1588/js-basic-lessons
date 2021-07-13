const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hi Jupiter!')
})
app.get('/fav-dog', (req, res) => {
    res.send('my fav dog is Jupiter')
  })
  app.get('/weekday-number/:num', (req, res) => {
      console.log(req.params); 
      if (req.params.num ==='1'){
          res.send('Monday')
      } else if (req.params.num === '2'){
          res.send('Tuesday')
      } else if (req.params.num === '3'){
        res.send('Wednesday')
    } else if (req.params.num === '4'){
        res.send('Thursday')
    } else if (req.params.num === '5'){
        res.send('Friday')
    } else if (req.params.num === '6'){
        res.send('Saturday')
    } else if (req.params.num === '7'){
        res.send('Sunday')
    } else {
          
        res.send('invalid day')  
      }
   
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})