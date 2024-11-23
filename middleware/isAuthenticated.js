const jwt = require('jsonwebtoken');

const checkAuth = async (req, res, next) => {
    try {
        console.log(req.cookies);
        const token = req.cookies.authToken;
        if (!token) {
            return res.redirect('/auth');
        }
        const decoded = jwt.verify(token, 'zxc');
        if (!decoded || !decoded.userId) {
            return res.redirect('/auth');
        }
        req.userId = decoded.userId;

        next();
    } catch (error) {
        console.error(error);
        return res.redirect('/auth');
    }
};

module.exports = checkAuth;
