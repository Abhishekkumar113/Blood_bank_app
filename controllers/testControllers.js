export const testController =(req,res)=>{
    res.status(200).send({
        message:"welcom user",
        success:true,
    });
}