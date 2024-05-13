// authMiddle.js

const jwt = require("jsonwebtoken");

const isAuthenticate = async (req, res, next) => {
  try {
    // Extract token from request (e.g., from headers)
    const token = req.cookies.token; // Assuming token is sent in the "Authorization" header

    if (!token) {
      return res.status(401).json({ message: "User not authenticated." });
    }

    // Verify token

    const decodedToken = jwt.verify(token,  process.env.JWT_SECRET_KEY );

    // Attach user information to request object for future use
    req.id = decodedToken.id

    next(); // Proceed to the next middleware
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { isAuthenticate };


const req = {
  id:"",
}
req.id = "sdlbgnjdfn"