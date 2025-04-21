const { verifyToken } = require("../config/jwt");

const protect = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      status: "error",
      message: "Unauthorized",
    });
  }

  try {
    const decoded = await verifyToken(token);
    if (!decoded ) {
      return res.status(401).json({
        status: "error",
        message: "Unauthorized",
      });
    }
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({
      status: "error",
      message: "Unauthorized",
    });
  }
}

module.exports = { protect };