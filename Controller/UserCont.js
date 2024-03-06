require("dotenv").config();
const bcrypt = require("bcryptjs");
// const Saltround = process.env.Saltround
const saltRound = 10;
const jwt = require("jsonwebtoken");
const Users = require("../Schema/userSchema");

const RegisterUser = async (req, res) => {
  try {
    const RgData = req.body;
    const { name, company, email, website, password, userId } = RgData;
    const userData = await Users.findOne({ email: email });

    if (userData) {
      return res.send({ msg: "User already existed" });
    } else {
      // const salt = bcrypt.genSaltSync(process.env.saltRound);
      const salt = bcrypt.genSaltSync(saltRound);
      const hashPassword = bcrypt.hashSync(password, salt);
      const token = await jwt.sign({ email: email }, process.env.SecreatKey, {
        expiresIn: "15d",
      });

      const DetailsObj = await Users({
        name: name,
        company: company,
        email: email,
        website: website,
        password: hashPassword,
      });

      const result = await DetailsObj.save();

      return res.send({
        msg: "User Register Successfully",
        userId: result._id,
        token: token,
        name: name,
        company: company,
        email: email,
        website: website,
        result: result,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const LoginUser = async (req, res) => {
  try {
    const logUser = req.body;
    const { email, password } = logUser;
    const userData = await Users.findOne({ email: email });

    if (userData) {
      const hashPassword = userData.password;
      const validate = bcrypt.compareSync(password, hashPassword);
      const token = jwt.sign({ email: email }, process.env.SecreatKey, {
        expiresIn: "30d",
      });

      if (validate) {
        return res.send({
          msg: "User Login Successfully",
          token: token,
          userData: userData,
        });
      } else {
        return res.send({
          msg: "Invalide Credential",
        });
      }
    }

    if (!userData) {
      return res.send({
        msg: "User not registed please register first",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  RegisterUser,
  LoginUser,
};
