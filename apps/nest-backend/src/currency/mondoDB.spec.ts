import { Model } from "mongoose";
import { Currency, CurrencySchema } from "./schemas/currency.schema";
const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db("ExchangeCurrency");
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a doc into collection', async () => {
    const currencies = db.collection('currencies');

    const currency = {
        _id: "myId",
        base: "USD",
        target: "RUB",
        values: 91.34,
        date: "2020-02-23"
    };
    await currencies.insertOne(currency);

    const insertedCurrency = await currencies.findOne({_id: 'myId'});
    await currencies.deleteOne(insertedCurrency);
    expect(insertedCurrency).toEqual(currency);
  });
});