import express from "express";

const app = express();

import welcomeRouter from "./routes/welcome.router.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/welcome", welcomeRouter);
app.use("*", (req, res) =>
  res.status(404).send({ error: "error", message: "Page Not Found" })
);

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Listening on port ${PORT} - ${process.env.NODE_ENV}`)
);
