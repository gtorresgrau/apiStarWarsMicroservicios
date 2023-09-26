module.exports=(res,statusCode,data, message)=>{
    res.status(statusCode).json({
        header: "Planets",
        error: false,
        message,
        data,
    });
};
