//create route to add a user
const userModel = require('../schemas/userSchema');


const createUser = async (req: any, res: any) => {
    const user = new userModel(req.body);
    try {
        await user.save();
        res.status(201).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
};

module.exports = createUser;
