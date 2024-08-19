import express, { json } from "express";
import { config } from "dotenv";
import {
  mongoConnect,
  mongoDCListener,
  mongoErrorListener,
} from "./db/db.connection.js";
import { UserRouter } from "./routes/user.router.js";
import { validateUser } from "./middleware/validateUser.js";

config();
const app = express();
const port = process.env.PORT;

app.use(json());

mongoDCListener();
mongoErrorListener();
await mongoConnect();

app.use("/", validateUser, UserRouter);

app.all("*", (req, res) => {
  res.status(404).json({
    code: 404,
    answer: "Seite nicht gefunden!",
  });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    answer: err.message || "Server Error",
  });
});

app.listen(port, () => {
  console.log(`Up at: http://localhost:${port}`);
});
