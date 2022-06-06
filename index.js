
require("dotenv").config();

const app = require("./app");


const port = process.env.port || 2;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
