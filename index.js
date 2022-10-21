import express, { urlencoded } from 'express';
import { aboutcontroller, indexcontroller } from './controllers/indexcontroller.js';
import { submitController } from './controllers/submitcontroller.js';
const app = express();

app.use(urlencoded({extended:true}))

app.set("view engine", "ejs")
app.get("/index", indexcontroller);

app.get("/about", aboutcontroller);
 app.post("/submit", submitController);

app.listen(3000, ()=>{
    console.log("it worked")
})