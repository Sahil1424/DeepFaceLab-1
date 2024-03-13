import express from "express";

const app = express();


app.get("/",(request,response,next)=>{
    response.send(" Bookrakachanpm");
    });

    app.listen(3000,()=>{
        console.log('API listening on port http://localhost:${process.env.PORT"}');
    });

    app.get("/insult", async (request,response)=> {
        const insultURL="https://insult.mattbas.org/api/insult";
        const res=await fetch (insultURL);
        const insult= await res.text();



        response.send(insult);
    });
    app.get("/id",(request,response,next)=>{
        const id=request.params?.id;

        if(insult(id)){
            const error = new Error('parameter is required to be a number. $(id) is not a number,');

            return next(error);

        }
    })