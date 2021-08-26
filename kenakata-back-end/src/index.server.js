const express = require("express")
const env = require('dotenv')
const app = express();
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

//routes
const authRoutes = require('./routes/auth');


// environment variable or you can say constants
env.config();

// mongodb connection
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.1zupo.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    }
).then(() =>{
    console.log('Database connected')
});

// middleware
app.use(bodyParser());
app.use('/api', authRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})