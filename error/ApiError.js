class ApiError extends Error {
    constructor(status, message) {
        super(); // вызов род. конструктор с помощью super
        this.status = status
        this.message = message
    }
        // статические функции - это функции которые можно вызывать без создания объекта
    static badRequest(message) {
        return new ApiError(404, message)
    }

    static internal(message) {
        return new ApiError(500, message)
    }

    static forbidden(message) {
        return new ApiError(403, message)
    }
}

module.exports = ApiError