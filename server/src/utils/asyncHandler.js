export default function asyncHandler(cb){
    return async (req, res, next) => {
        try{
            await cb(req, res, next);
        } catch (err){
            console.log("ERROR: " + err);
            return res.status(500).json({message: "Internal Server Error"});
        }
    }
}

//ASync Handler