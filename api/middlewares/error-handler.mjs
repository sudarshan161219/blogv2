const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err);
    return res.status(500).send({msg: "Something went Wrong!"})
}

export default errorHandlerMiddleware