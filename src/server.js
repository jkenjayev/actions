const server = require("express");
const app = server();

app.get("/", (req, res) => {
	app.send("Hello world!");
});

app.listen(3000, () => console.log(`Server is running on port ${3000}`));
