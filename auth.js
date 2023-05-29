const jwt=require("jsonwebtoken");
const SECRET_KEY="NOTESAPI";

const auth=(req,res,next)=>{
    try{

        let token=req.headers.authorisation;
        if(token){
            token=token.split("")[1];
            let user=jwt.verify(token, SECRET_KEY);
            req.userId=user.id;
        }
        else{
            res.ststus(401).json({message:"Unauthorised User"});
        }
        next();
    }catch(error){
        console.log(error);
        res.status(401).json({message:"Unauthorised User"});
    }
}
module.exports=auth;