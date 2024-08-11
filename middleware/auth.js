const {User} = require("../models");
const jwt = require("jsonwebtoken");
const { ErrorHandler } = require('./errors');

const auth = (req, res, next) => {
    try {
      let token = req.header("Authorization");
      if (!token) return res.status(401).json({ msg: "Please Login or Signup" });

      token = token.replace(/^Bearer\s+/, "");

      jwt.verify(token, process.env.JWT_ACCESS_KEY, async (err, payload) => {
        if (err)
          return next(new ErrorHandler(401, "Invalid Authentication"));
        
        const { id } = payload;
        const user = await User.findById(id);

        if (!user) next(new ErrorHandler(401, "Invalid Authentication"));

        req.user = user;

        next();
      });
    } catch (err) {
      return next(err);
    }
  };

  module.exports = auth;