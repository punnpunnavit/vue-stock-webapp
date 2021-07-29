const express = require("express");
const router = express.Router();
const user = require("./models/user");
const bcrypt = require("bcryptjs");
const constant = require("./constant");

router.post("/login", async (req, res) => {
  try {
    console.log("login: " + JSON.stringify(req.body));
    const { username, password } = req.body;
    const result = await user.findOne({ where: { username: username } });
    try {
      if (result) {
        if (bcrypt.compareSync(password, result.password)) {
          res.json({
            result: constant.kResultOk,
            message: JSON.stringify(result),
          });
        } else {
          console.log("we[fkpwqf0pwjqfpojwfp1");
          res.json({
            result: constant.kResultNok,
            message: "Invalid password",
          });
        }
      } else {
        console.log("we[fkpwqf0pwjqfpojwfp2");
        res.json({ result: constant.kResultNok, message: "Invalid username" });
      }
    } catch (error) {
      console.log(error);
      console.log("we[fkpwqf0pwjqfpojwfp");
      res.json({ result: constant.kResultNok, message: JSON.stringify(error) });
    }
  } catch (err) {
    console.log("we[fkpwqf0pwjqfpojwfp");
    res.status(500).send(err);
  }
});

router.post("/register", async (req, res) => {
  try {
    console.log("register: " + JSON.stringify(req.body));
    req.body.password = await bcrypt.hash(req.body.password, 8);
    const result = await user.create(req.body);
    res.json({ result: constant.kResultOk, message: JSON.stringify(result) });
  } catch (error) {
    res.json({ result: constant.kResultNok, message: JSON.stringify(error) });
  }
});

module.exports = router;
