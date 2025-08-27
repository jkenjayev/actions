const server = require("express");
const request = require("supertest");
const app = server();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => console.log(`Server is running on port ${3000}`));
test("GET/ returns Hello World!", async () => {
  const response = await request(app).get("/");
  expect(response.text).toBe("Hello World!");
});
