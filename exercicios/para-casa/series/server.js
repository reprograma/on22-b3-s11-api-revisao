const app = require('./src/app')
const PORT = 5151

app.listen(PORT, ()=>{
    console.log(`Server working on port ${PORT}`)
})

