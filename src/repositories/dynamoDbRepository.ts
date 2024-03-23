class DynamoDbRepository {
  public insertItem(item: CreateStockRequest) {
    console.log(`Item: ${JSON.stringify(item)} added to db.`);
  }
}
export const dynamoDbRepository = new DynamoDbRepository();
