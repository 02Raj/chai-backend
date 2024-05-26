const asyncHandler = (requestHandler)  => {
    (req,res,next) => {
        Promise.resolve().catch((err) => next(err))
    }
}
 

export {asyncHandler}

// const asyncHandler = (fn) => async(req,res) => {

//     try{
//         await fn(req,res,next)
//     }catch (error){
//         res.status(err.code || 500).json({
//            success: false,
//            message: err.message 
//         })
//     }
// }
