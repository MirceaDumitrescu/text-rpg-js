import { UserModel } from "../schemas/userSchema";

export const getCharLevel = async (req: any, res: any) => {
    //find the user by ID and return the inventory
    UserModel.findById(req.params.id, function(err: any, user: any) {
        if (err) {
            res.send(err);
        } else {
            res.json(user.characterData.level);
        }
    });
}

export const saveCharLevel = async (req: any, res: any) => {
    //find the user by ID and return the inventory
    UserModel.findById(req.params.id, function(err: any, user: any) {
        if (err) {
            res.send(err);
        } else {
            if (req.body.level) {
                user.characterData.level = req.body.level;
                user.save(function(err: any) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.json(user);
                    }
                });
            } else {
                res.send(err);
            }
        }
    });
}
