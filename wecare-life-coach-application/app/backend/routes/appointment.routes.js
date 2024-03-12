let express = require("express"),
  router = express.Router();
const appointmentSchema = require("../models/Appointment");

// CREATE Appointment
router.route("/").post(async (req, res, next) => {
  await appointmentSchema
    .create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Appointment successfully added!",
        status: 201,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

router.route("/:id").put(async (req, res, next) => {
  await appointmentSchema
    .findByIdAndUpdate(req.params.id, {
      $set: {
        ...req.body,
        status: req.body.status || "pending", // Assuming the status is provided in the request body
      },
    })
    .then((result) => {
      console.log(result);
      res.json({
        data: result,
        msg: "Appointment successfully updated.",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
