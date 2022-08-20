import { UserModel } from "../schemas/userSchema";

export const getUsers = async (req: any, res: any) => {
    UserModel.find({}, function(err: any, users: any) {
        if (err) {
            res.send(err);
        } else {
            res.json(users);
        }
    });
};
