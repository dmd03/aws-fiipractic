class CreateStockService {
  public async addItem(item: CreateStockRequest): Promise<void> {
    console.log(`Starting addItem service for payload:
${JSON.stringify(item)}.`);
    this.validateAddItem(item);
    return await dynamoDbRepository.insertItem(item);
  }
  s;
  private validateAddItem(item: CreateStockRequest): void {
    console.log(`Starting addItem validation.`);
    const { name, price, itemType } = item;
    if (
      !(
        item &&
        name &&
        typeof name === "string" &&
        price &&
        typeof price === "number" &&
        itemType &&
        typeof itemType === "string"
      )
    ) {
      throw new Error(`addItem validation failed for request:
${JSON.stringify(item)}`);
    }
    console.log(`addItem validation passed!`);
  }
}
export const createStockService = new CreateStockService();