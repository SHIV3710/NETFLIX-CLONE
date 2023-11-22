const app = require("./app");   
const { connectDatabase } = require("./config/database");

require("dotenv").config({path: "./config/config.env"})

connectDatabase();

app.listen(process.env.PORT,(req,res)=>{
    console.log(`Server is runnning`);
});

