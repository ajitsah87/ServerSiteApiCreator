const express = require('express')
const app = express()
const connectDb = require('./config/dbConfig')

const PORT = process.env.PORT || 5000
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')

const color = require('cli-colors')
const uploadRouter = require('./routes/add_Products')
const getRouter = require('./routes/get_Products')

//connection request
connectDb()

//neccessary middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// app.use(cors({
//     origin: ["http://localhost:5173", "https://snapstore.vercel.app", `${process.env.ADMIN_LOGIN}`]
// }));
app.use(cors());
  
// Routes
app.get("/", (req, res) => {
    res.send('server is running')
});


app.use('/upload', uploadRouter)
app.use('/get', getRouter)

app.listen(PORT, (err)=>{
   err ? console.log(color.bgRed(err.message)) : 
   console.log(color.cyan(`listening on port ${PORT}`))
});
