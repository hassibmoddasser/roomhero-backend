const request = require("supertest");
const { faker } = require("@faker-js/faker");

const app = require("../../app/app");

describe("Supplier API", () => {
  it("GET /suppliers", () => request(app)
    .get("/api/v1/supplier")
    .expect(200)
    .then((response) => {
      expect(response.body).toEqual(expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          website: expect.any(String),
          internalComments: expect.any(String),
          deliveryTime: expect.any(Number),
          minimumOrder: expect.any(Number),
        }),
      ]));
    }));

  it("POST /suppliers", () => request(app)
    .post("/api/v1/supplier")
    .send({
      name: faker.name.findName(),
      website: faker.internet.url(),
      internalComments: faker.random.words(),
      deliveryTime: faker.random.numeric(),
      minimumOrder: faker.random.numeric(4),
    })
    .expect(201)
    .expect("Content-Type", /json/));
});
