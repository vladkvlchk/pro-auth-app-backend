module.exports = class ApiError extends Error {
  status;
  errors;

  constructor(status, errors = [], message) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError(){
    return new ApiError(401,[], 'The user is not authorized');
  }

  static BadRequest(message, errors = []){
    return new ApiError(400, errors, message);
  }
};
