const { parseToken } = require("../services/userServices");

module.exports = () => (req, res, next) => {
  const token = req.headers["x-authorization"];
  // console.log("token => 1", token);
  if (token) {
    try {
      const payload = parseToken(token);
      req.user = payload;
      req.token = token;
    } catch (error) {
      return res.status(401).json({ message: "Invalid authorization token" });
    }
  }
  // console.log("token => 2", token);
  next();
};
