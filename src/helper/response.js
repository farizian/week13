const response = {
    success: (res, output, data, message)=>{
        const response={
            data: data,
            output: output,
            success: true,
            code: 200,
            message: message
        }
        res.json(response)
    },
    failed: (res, code)=>{
        if (code === 500){
            const response ={
                success: false,
                data: null,
                code: code,
                error: err,
                message: "Internal Server Error"
            }
            res.json(response)
        }
        else if (code === 400){
            const response ={
                success: false,
                data: null,
                code: code,
                error: err,
                message: "Bad Request",
            }
            res.json(response)
        }
        else if (code === 401){
            const response ={
                success: false,
                data: null,
                code: code,
                error: err,
                message: "Unauthorized",
            }
            res.json(response)
        }
        else if (code === 404){
            const response ={
                success: false,
                data: null,
                code: code,
                error: err,
                message: "Data Not Found",
            }
            res.json(response)
        }
        else if (code === 408){
            const response ={
                success: false,
                data: null,
                code: code,
                error: err,
                message: "Request Timeout",
            }
            res.json(response)
        }
    }
}

module.exports = response