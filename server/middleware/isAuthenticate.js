const jwt = require("jsonwebtoken");
const userModel = require("../model/user");

const isAuthenticate = async (req, res, next) => {
  try {
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    console.log("Query:", req.query);

    // Extract token from headers, body, or query
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    console.log("Extracted Token:", token);

    if (!token) {
      return res.status(401).json({ message: "User not authenticated." });
    }

    // Verify the token using the secret key
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("Decoded Token:", decodedToken);

    // Attach user information to request object for future use
    req.userId = decodedToken.userId;

    // Proceed to the next middleware
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { isAuthenticate };
