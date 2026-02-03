import { InternalServerError, MethodNotAllowedError } from "infra/errors";

function onNoMatchHandler(request, response) {
  const publicErrorObject = new MethodNotAllowedError();
  response.status(publicErrorObject.statusCode).json(publicErrorObject);
}

function onErrorHandler(error, request, response) {
  const puclicErrorObject = new InternalServerError({
    statusCode: error.statusCode,
    cause: error,
  });

  console.log(puclicErrorObject);

  response.status(puclicErrorObject.statusCode).json(puclicErrorObject);
}

const controller = {
  errorHandlers: {
    onNoMatch: onNoMatchHandler,
    onError: onErrorHandler,
  },
};

export default controller;
