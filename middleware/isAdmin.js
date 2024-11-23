const findUser = require('../utils/findUser');

const checkAdmin = async (req, res, next) => {
    try{
        const userId = req.userId;

        const user = await findUser(userId);
        console.log(user.role);

        if(user.role !== 'admin'){
            return res.status(403).send('Access denied');
        }

        next();
    }   catch(error){
        console.error('Error in checkAdmin middleware', error);
                return res.status(500).send('Internal server error');
    }
            
};

module.exports = checkAdmin;    