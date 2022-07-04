const { faker } = require("@faker-js/faker");

const Supplier = require("../../../app/models/supplier.model");

describe("Supplier model", () => {
  describe("Schema", () => {
    let supplier;

    beforeEach(() => {
      supplier = new Supplier({
        name: faker.name.findName(),
        website: faker.internet.url(),
        internalComments: faker.random.words(),
        deliveryTime: faker.random.numeric(),
        minimumOrder: faker.random.numeric(4),
      });
    });

    test("should have a name", () => {
      expect(supplier.name).toBeDefined();
    });

    test("should have a website", () => {
      expect(supplier.website).toBeDefined();
    });

    test("should have internal comments", () => {
      expect(supplier.internalComments).toBeDefined();
    });

    test("should have a delivery time", () => {
      expect(supplier.deliveryTime).toBeDefined();
    });

    test("should have a minimum order", () => {
      expect(supplier.minimumOrder).toBeDefined();
    });
  });
});
