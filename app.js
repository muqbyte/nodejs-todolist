const express= require("express")
const app=express();
const port=8080;
// import HomeController from "./Controller/HomeController";
const HomeController= require("./Controller/HomeController");
app.set("view engine", "ejs");
app.get("/", HomeController)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})