const path = require("path");
const filePath = path.join(__dirname, "../View/pages/index.ejs");
console.log(filePath);

const HomeController=(req,res) =>{
    res.render(filePath)
    // res.sendFile(filePath)
    // console.log(res.sendFile(filePath,"/View/
}


module.exports= HomeController;