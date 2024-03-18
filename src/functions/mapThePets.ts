import { Handler } from "aws-lambda";
import { Request, Response } from "aws-sdk";
import { responseBuilder } from "src/utils/responseBuilder";

export const handler: Handler = async (event: Request<unknown, unknown>): Promise<Response<unknown, unknown>> => {
  const response = { myRequest: event };
  await setTimeout(() => console.log(event), 1000);
  return responseBuilder.buildResponse(200, response);
};
