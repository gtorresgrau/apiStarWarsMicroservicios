module.exports=(res,statusCode,data, message)=>{
    res.status(statusCode).json({
        header: "Character",
        error: false,
        message,
        data,
    });
};

