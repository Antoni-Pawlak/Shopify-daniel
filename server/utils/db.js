const { client } = require("../lib/db-client");
const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");

const {
  UpdateItemCommand,
  PutItemCommand,
  GetItemCommand,
  ScanCommand,
} = require("@aws-sdk/client-dynamodb");

async function createItem(tableName, metaData) {
  try {
    metaData = metaData ?? {};
    const createParams = {
      TableName: tableName,
      Item: marshall(metaData),
    };

    const createResult = await client.send(new PutItemCommand(createParams));

    return createResult;
  } catch (error) {
    console.log("Error occured while creating item in database", error);
    throw new Error(error);
  }
}

async function updateItem(tableName, primaryKey, metaData) {
  try {
    metaData = metaData ?? {};

    const objKeys = Object.keys(metaData);
    const paramToUpdate = {
      TableName: tableName,
      Key: marshall(primaryKey),
      UpdateExpression: `SET ${objKeys
        .map((_, index) => `#key${index} = :value${index}`)
        .join(", ")}`,
      ExpressionAttributeNames: objKeys.reduce(
        (acc, key, index) => ({
          ...acc,
          [`#key${index}`]: key,
        }),
        {}
      ),
      ExpressionAttributeValues: marshall(
        objKeys.reduce(
          (acc, key, index) => ({
            ...acc,
            [`:value${index}`]: metaData[key],
          }),
          {}
        )
      ),
    };

    const updateResult = await client.send(
      new UpdateItemCommand(paramToUpdate)
    );

    return updateResult;
  } catch (error) {
    console.log("Error occured while updating item to database", error);
    throw new Error(error);
  }
}

async function fetchItem(tableName, primaryKey, attribute) {
  try {
    const params = {
      TableName: tableName,
      Key: marshall(primaryKey),
    };
    if (attribute) {
      params["AttributesToGet"] = [attribute];
    }
    const { Item } = await client.send(new GetItemCommand(params));
    const data = Item ? unmarshall(Item) : null;
    return data;
  } catch (error) {
    console.log("Error occured while fetching data from database", error);
    throw new Error(error);
  }
}

async function fetchAllItems(tableName) {
  try {
    const params = {
      TableName: tableName,
    };
    const scanResults = [];
    const { Items } = await client.send(new ScanCommand(params));
    Items.forEach((item) => scanResults.push(unmarshall(item)));
    return scanResults;
  } catch (error) {
    console.log("Error occured while fetching all items from database", error);
    throw new Error(error);
  }
}

module.exports = {
  fetchItem,
  fetchAllItems,
  updateItem,
  createItem,
};
