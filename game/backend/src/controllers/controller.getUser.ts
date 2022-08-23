import { UserModel } from "../schemas/userSchema";

export const getUser = async (req: any, res: any) => {
    // find user based on ID
    UserModel.findById(req.params.id, function(err: any, user: any) {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    });
}
