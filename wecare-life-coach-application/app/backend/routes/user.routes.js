let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router(),
  jwt = require("jsonwebtoken");

// User Model
let userSchema = require("../models/User");
const { hashPassword, comparePassword } = require("../util/passwordEncrypt");

// CREATE Student
router.route("/").post(async (req, res, next) => {
  const userCount = await userSchema.countDocuments({});
  const uniqueNumber = userCount + 1;
  req.body.userId = uniqueNumber;
  req.body.password = await hashPassword(req.body.password);

  await userSchema
    .create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully added!",
        status: 201,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

// READ Students
router.route("/").get(async (req, res, next) => {
  await userSchema
    .find()
    .then((result) => {
      res.json({
        data: result,
        message: "All items successfully fetched.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

// Get Single Student
router.route("/:id").get(async (req, res, next) => {
  await userSchema
    .findById(req.params.id)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully fetched.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

// Update Student
router.route("/:id").put(async (req, res, next) => {
  await userSchema
    .findByIdAndUpdate(req.params.id, {
      $set: req.body,
    })
    .then((result) => {
      console.log(result);
      res.json({
        data: result,
        msg: "Data successfully updated.",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Delete Student
router.route("/:id").delete(async (req, res, next) => {
  await userSchema
    .findOneAndDelete({ _id: req.params.id })
    .then(() => {
      res.json({
        msg: "Data successfully updated.",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

//login
router.post("/login", async (req, res) => {
  console.log(req.body);
  const { userId, password } = req.body;

  // Check if the user exists in the database
  const user = await userSchema.findOne({ userId });

  if (!user) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  // Check if the password is correct
  const validPassword = await comparePassword(password, user.password);

  if (!validPassword) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  // Create and sign a JWT
  const token = jwt.sign(
    { userId: user._id, username: user.name },
    "madage-99",
    { expiresIn: "2h" }
  );

  res.json({ token });
});

module.exports = router;
