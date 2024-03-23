export const Functions = {
  mapThePets: {
    handler: "src/functions/mapThePets.handler",
    authorizer: "src/utils/authorizerHandler.authorizer",
    events: [
      {
        http: {
          method: "post",
          path: "pets",
          authorizer: {
            name: "authorizerName",
            type: "token",
            identitySource: "method.request.header.Authorization",
        },
      },
    },
    ],
    role: "MyCustomRole",
    integration: "lambda",
    request: {
      template: {
        "application/json":
          '${set($inputRoot = $input.path(\'$\'))}[\n${foreach($elem in $inputRoot)}\n  {\n    "description": "Item ${elem.id} is a ${elem.type}.",\n    "askingPrice": ${elem.price}\n  }${if($foreach.hasNext)},${end}\n${end}\n]',
      },
    },
  },
  // anotherFunction: {
  //   // Add your lambda function here
  //   handler: "src/functions/anotherFunction.handler",
  //   events: [
  //     {
  //       http: {
  //         method: "post",
  //         path: "another-function",
  //         authorizer: {
  //           name: "authorizerName", // Replace with the name of your authorizer
  //           type: "token", // Replace with the type of authorizer you're using
  //           identitySource: "method.request.header.Authorization", // Replace with the identity source
  //         },
  //       },
  //     },
  //   ],
  //   role: "AnotherCustomRole", // Replace with the appropriate role
  //   integration: "lambda",
  //   request: {
  //     template: {
  //       // Add your request template for this lambda function if needed
  //     },
  //   },
  // },
};
