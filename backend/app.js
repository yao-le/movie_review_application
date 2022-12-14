// import express
const express = require("express");
require("./db");
const userRouter = require("./routes/user");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // convert data to json format
app.use("/api/user", userRouter);

app.post(
  "/sign-in",
  (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password)
      return res.json({ error: "email/password missing" });
    next();
  },
  (req, res) => {
    res.send("<h1>Hello I am from your new backend about</h1>");
  }
);

app.listen(8000, () => {
  console.log("The port is listening on port 8000");
});
