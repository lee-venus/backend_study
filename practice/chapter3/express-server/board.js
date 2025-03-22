const express = require("express");
const app = express();
let posts = [];

app.use(express.json()); //https://duklook.tistory.com/272
 // express 앱에서 json 형태의 요청 body를 파싱하기 위해 사용되는 미들웨어.. 


 app.use(express.urlencoded({extended:true}));

 app.get("/", (req,res) =>{
    res.json(posts);
 });

 app.post("/posts", (req,res) => {
    const {title,name,text} = req.body;
    post.push({id:post.length+1, title,name,text,createdDT:Date()});
    res.json({title,name,text});
 });

 app.delete("/posts/id", (req,res) =>{
    const id = req.params.id;
    const filteredPosts = posts.filter((post)=>post.id !== +id);
    const isLengthChanged = posts.length !== filteredPosts.length;
    posts.filteredPosts;
    if (isLengthChanged){
        res.json("OK");
        return;
    }
    res.json("NOT CHANGED");
 });

 app.listen(3000, () =>{
    console.log("welcone posts START");
 });

 