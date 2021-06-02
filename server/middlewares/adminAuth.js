const jwt = require('jsonwebtoken');

const adminAuth = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(400).json({
            type: 'failed',
            message: 'Authentication failure!',
        });
    }
    try {
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        if (req.user.status && req.user.role) {
            next();
        } else {
            return res.status(400).json({
                type: 'failed',
                message: 'Authentication failure!',
            });
        }
    } catch {
        return res.status(400).json({
            type: 'failed',
            message: 'Authentication failure!',
        });
    }
};

module.exports = adminAuth;