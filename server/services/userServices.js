const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
// import { jwtDecode } from "jwt-decode";

const secret = "q-asd231adfas12321kl";

async function register(username, email, password) {
  console.log(email, username, password);
  const existingEmail = await User.findOne({ email });
  const existingUserName = await User.findOne({ username });

  if (existingEmail) {
    throw new Error("Email is already taken!");
  }

  if (existingUserName) {
    throw new Error("Username is already taken!");
  }

  if (username.length < 4) {
    throw new Error("Username should be at least 4 characters!");
  }
  if (password.length < 6) {
    throw new Error("Password should be at least 6 characters!");
  }

  const user = await User.create({
    username,
    email,
    hashedPassword: await bcrypt.hash(password, 10),
  });

  return createToken(user);
}

async function login(username, password) {
  const user = await User.findOne({ username });

  if (!user) {
    throw new Error("Invalid  username or password!!!");
  }

  const match = await bcrypt.compare(password, user.hashedPassword);
  if (!match) {
    throw new Error("Invalid  username or password!!!");
  }
  return createToken(user);
}

function createToken(user) {
  const payload = {
    _id: user._id,
    username: user.username,
    email: user.email,
  };
  return {
    _id: user._id,
    username: user.username,
    email: user.email,
    accessToken: jwt.sign(payload, secret),
  };
}

function parseToken(token) {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw new Error("Invalid acces token!");
  }
}

function decodeToken(token) {
  return jwt.decode(token);
  // console.log(jwt.decode(token));
}

module.exports = {
  register,
  login,
  parseToken,
  decodeToken,
};
