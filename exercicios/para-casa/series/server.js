const app = require('./src/models/app')
const PORT = 5151

app.listen(PORT, ()=>{
    console.log(`Server working on port ${PORT}`)
})

