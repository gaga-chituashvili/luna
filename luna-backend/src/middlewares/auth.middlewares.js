const { UserSchema } = require('../models/user-schema');
const { verifyToken } = require('../utils/jwt');

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res
      .status(401)
      .json({ success: false, message: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = verifyToken(token);

    const userInDb = await UserSchema.findOne({
      where: { email: decoded.email },
      attributes: { exclude: ['updatedAt', 'createdAt', 'password'] },
    });

    if (!userInDb) {
      return res
        .status(400)
        .json({ success: false, message: 'User Could not be found' });
    }

    req.user = userInDb;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized: Invalid or expired token',
    });
  }
};

module.exports = { authMiddleware };

