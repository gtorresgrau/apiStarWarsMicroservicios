module.exports=(res, statusCode, data, message)=>{
    res.status(statusCode).json({
        header: "Model",
        error: false,
        message,
        data,
    });
};