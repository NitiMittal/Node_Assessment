const UserServices = require("../services/UserServices");
const bcrypt = require("bcrypt");

const userController = {
  registeration: async (req, res) => {
    console.log("start", req.body);
    try {
      var username = req.body.username;
      var firstName = req.body.firstName;
      var lastName = req.body.lastName;
      var email = req.body.email;
      var password = req.body.password;
      var phone = req.body.phone;

      let hashPassword = await bcrypt.hash(password, 10);
      password = hashPassword;
      console.log("pass", password);
      const userData = {
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phone: phone,
      };

      console.log("userData", userData);
      const newUser = await UserServices.createRecord(userData)
        .then((result) => {
          console.log("result", result);
          if (result) {
            res.status(200).send({ message: "success" });
          } else {
            res.status(400).send({ message: "Duplicate values" });
          }
        })
        .catch((err) => {
          res.status(500).send({ message: "Something went wrong" });
        });
    } catch (err) {
      res.status(500).send({ message: err });
    }
  },

  login: async (req, res) => {
    try {
      console.log("body", req.body);
      var email = req.body.email;
      var password = req.body.password;
      const getUser = await UserServices.oneRecord(email);
      console.log("getUser", getUser);
    } catch {}
  },
};

module.exports = userController;
