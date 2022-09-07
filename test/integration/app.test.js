const supertest = require("supertest");
const server = require("../../app");

describe("Calculate", () => {
  it("POST /calculate: action: sum", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "sum",
      num1: 20,
      num2: 10,
    });

    console.log({ response });
    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ result: 30 }));
  });
  it("Post /calculate: action: subtract", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "subtract",
      num1: 20,
      num2: 10,
    });

    console.log({ response });
    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ result: 10 }));
  });
  it("Post /calculate: action: divide", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "divide",
      num1: 20,
      num2: 10,
    });

    console.log({ response });
    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ result: 2 }));
  });
  it("Post /calculate: action: multiply", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "multiply",
      num1: 20,
      num2: 10,
    });

    console.log({ response });
    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ result: 200 }));
  });
});
