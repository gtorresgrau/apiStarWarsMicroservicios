module.exports=(res,statusCode,data, message)=>{
    res.status(statusCode).json({
        header: "Films",
        error: false,
        message,
        data,
    });
};