const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: 'Token não fornecido'
      });
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
      return res.status(401).json({
        message: 'Token inválido'
      });
    }

    const [scheme, token] = parts;

    if (scheme !== 'Bearer') {
      return res.status(401).json({
        message: 'Token mal formatado'
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id;

    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Token inválido'
    });
  }
};

module.exports = authMiddleware;