const express= require("express");
const app= express();

// app.get("/abc",(req,res)=>{
//     // res.send("get user call")
//     // res.send("hahaha")
//     res.send({firstName:"Akshay",lastName:"Saini"})

// });
app.get("/user/:userId/:name/:password",(req,res)=>{
    // res.send("get user call")
    // res.send("hahaha")
    // console.log(req.query);
    console.log(req.params);

    res.send({firstName:"vishnu",lastName:"kant"})

});



// "/ab?c"  means    ac work b optional
//"/ab+c"   means    abc , abbc , abbbbbbc    work
// "/ab*cd"  means  abvishnucd work between anythink work
// "/a(bc)?d"   means bc optional
//"/a(bc)+d"   means abcbcbcd  work
// "/a/"  means in ural anywhere a letter it works.
// "/.*fly$/"  end with fly work /butturfly it works.

//  order marrter krta h / menas  /ke bad jo bhi  ho vhi khulega  jo / me khulgw  agr   dusra show krna h to  order change karna hoga


// app.use("/hello",(req,res)=>{
//     res.send("hellp hello hello")
// })



// app.use("/test",(req,res)=>{
//     res.send("test test test")
// })

// //  / ke bed kuch bh ho yhi khuega is line me  agarhello and tst h to vo khulega
// app.use("/",(req,res)=>{
//     res.send("hello from the dash board")
// })

//  this will only get call to /user
app.get("/user",(req,res)=>{
    // res.send("get user call")
    res.send({firstName:"Vishnu",lastName:"Kant"})
})
app.post("/user",(req,res)=>{
    console.log('save data to database');
    res.send("data succesfully save to database.")
})

app.delete("/user",(req,res)=>{
    res.send("deleted succesfully")
})

app.use("/test",(req,res)=>{
    res.send("test test test")
})

app.listen(7777,()=>{
    console.log('server is succesfully listhing on 77777');
})


