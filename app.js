const express = require("express")


const app = express()


app.get( "/", (req, res) => {
    //Testing
    res.send("Home")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    console.log(`Listening on http://localhost:${PORT}`)
})
