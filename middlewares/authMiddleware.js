import JWT from "jsonwebtoken";


export const middleware=async(req,res,next)=>{
    try {
         const token = req.headers['authorization'].split(" ")[1]
         JWT.verify(token,process.env.JWT_SECRET,(err,decode)=>{
              if(err){
                return res.status(201).send({
                    success:false,
                    message:"Auth Failed"
                })
              }
              else{
                req.body.userId=decode.userId;
                next();
              }
         })
    } catch (error) {
        console.log(error);
        res.status(401).send({
            sucess:false,
            error,
            message:'Auth Failed'
        })
    }

}

// export const name = async (req, res, next) => {
//   try {
//       const authHeader = req.headers['authorization'];
      
//       if (!authHeader) {
//           return res.status(401).send({
//               success: false,
//               message: "Authorization header missing"
//           });
//       }

//       const token = authHeader.split(" ")[1];

//       if (!token) {
//           return res.status(401).send({
//               success: false,
//               message: "Token missing"
//           });
//       }

//       JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
//           if (err) {
//               return res.status(401).send({
//                   success: false,
//                   message: "Auth Failed"
//               });
//           } else {
//               req.body.userId = decode.userId;
//               next();
//           }
//       });
//   } catch (error) {
//       console.log(error);
//       res.status(500).send({
//           success: false,
//           error,
//           message: 'Internal Server Error'
//       });
//   }
// };