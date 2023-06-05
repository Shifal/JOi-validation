const router = require('express').Router();
const User = require("../model/User");
const verify = require('./verifyToken');

router.post("/", verify, async (req, res) => {
  try {
    if (req.body.phone_number && req.body.name) {
      await User.updateOne(
        { email: req.body.email },
        {
          $set: {
            Phone_Number: req.body.phone_number,
            name: req.body.name,
          },
        }
      );
      res.send("Successfully Updated phone_number and name");
    } else if (req.body.phone_number) {
      await User.updateOne(
        { email: req.body.email },
        { $set: { Phone_Number: req.body.phone_number } }
      );
      res.send("Successfully Updated phone_number");
    } else if (req.body.name) {
      await User.updateOne(
        { email: req.body.email },
        { $set: { name: req.body.name } }
      );
      res.send("Successfully Updated the name");
    } else {
      res.send("Nothing to Update");
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
