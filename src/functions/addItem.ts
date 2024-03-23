import { Handler } from "aws-lambda";
import { Request, Response } from "aws-sdk";
import { responseBuilder } from "src/utils/responseBuilder";
import { createStockService } from "../services/createStockService";



export const handler: Handler = async (event: Request<unknown, unknown>): Promise<Response<unknown, unknown>> => {
console.log(`Started addItem handler.`);
const { body } = event;
    await createStockService.addItem(JSON.parse(body) as CreateStockRequest);
    return responseBuilder.buildResponse(201, {message: "Item created successfully!"});
};