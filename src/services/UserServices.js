const userModel = require("../models/users");

const UserServices = {
  createRecord: async (userData) => {
    try {
      const newUser = userModel(userData);
      await newUser
        .save()
        .then(() => {
          return newUser;
        })
        .catch((err) => {
          console.log("errordds", err);
          return err;
        });
    } catch (err) {
      return err;
    }
  },

  oneRecord: async (email) => {
    console.log("email", email);
    try {
      const getUser = await userModel.findOne({ email: email }, (err, data) => {
        if (err) {
          console.log("err", err);
          return err;
        } else {
          console.log("data", data);
          return data;
        }
      });
    } catch (err) {
      return err;
    }
  },
};

module.exports = UserServices;
