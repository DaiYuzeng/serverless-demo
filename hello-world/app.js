exports.lambdaHandler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World from a local Lambda function!'
    })
  };
};