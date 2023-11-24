const express = require("express");
const cors = require("cors");
const storeOrderRouter = require("./routes/storeOrder");
const app = express();
const port = 3010;

app.use(cors({ origin: "http://localhost:3001" })); //frontend 주소

app.use(express.json());
app.use("/storeOrder", storeOrderRouter);

app.get("/", (req, res) => {
  res.send("Hello, Express");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port} 🦻`);
});
