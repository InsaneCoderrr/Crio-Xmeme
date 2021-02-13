const mongoose = require('mongoose')

//CONNECTING TO LOCAL MONGO DATABASE
const connectDB = async () => {
    try{
        const conn = await mongoose.connect('mongodb://localhost/xMeme',{
            useCreateIndex:true,
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false 
        })
        //SUCCESS
        console.log("Connected to database");
    }catch(err){
        //ERROR OCCURRED
        console.log(`Error ${err.message}`);
        process.exit(1);
    }   
}

module.exports = connectDB