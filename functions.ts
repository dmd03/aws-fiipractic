export const Functions = {
  mapThePets: {
    handler: "src/functions/mapThePets.handler",
    events: [
      {
        http: {
          method: "post",
          path: "pets",
        },
      },
    ],
    role: "MyCustomRole",
  },
};
