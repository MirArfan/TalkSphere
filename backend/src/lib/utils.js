import jwt from 'jsonwebtoken';


export const generateToken= (userId, res)=>{
    const {JWT_SECRECT} = process.env;
    if(!JWT_SECRECT){
        throw new Error("JWT_SECRECT is not configured");
    }
    const token= jwt.sign({userId}, process.env.JWT_SECRECT,{
        expiresIn: "7d",
    });

    res.cookie("jwt",token,{
        maxAge: 7*24*60*60*1000, // mili sec
        httpOnly: true, // prevent xss attacks
        sameSite: "strict", // CSRF attactk
        secure: process.env.NODE_ENV==='development'? false: true,
    });
    return token;
};
