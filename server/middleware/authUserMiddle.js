// authMiddle.js

const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  try {
    // Extract token from request (e.g., from headers)
    const token = req.headers.authorization.split(" ")[1]; // Assuming token is sent in the "Authorization" header

    // Verify token
    const JWT_SECRET_KEY =
      process.env.JWT_SECRET_KEY || "THIS_IS_JWT_SECRET_KEY";
    const decodedToken = jwt.verify(token, JWT_SECRET_KEY);

    // Attach user information to request object for future use
    req.user = decodedToken;

    next(); // Proceed to the next middleware
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { authenticate };
