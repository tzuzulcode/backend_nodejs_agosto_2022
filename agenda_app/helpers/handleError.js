const handleError = error => {
    if (error.code === 11000) {
        return {
            success: false,
            message: Object.keys(error.keyValue).map(
                key => `El ${key} ya esta en uso: ${error.keyValue[key]}`
            )
        }
    }

    return {
        success: false,
        message: error.message
    }
}

module.exports = handleError
