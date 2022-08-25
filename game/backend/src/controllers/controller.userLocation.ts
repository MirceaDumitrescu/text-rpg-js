import { UserModel } from "../schemas/userSchema";

export const getCharLocation = async (req: any, res: any) => {
    //find the user by ID and return the inventory
    UserModel.findById(req.params.id, function(err: any, user: any) {
        if (err) {
            res.send(err);
        } else {
            res.json(user.characterData.location);
        }
    });
}

export const saveCharLocation = async (req: any, res: any) => {
    //find the user by ID and return the inventory
    UserModel.findById(req.params.id, function(err: any, user: any) {
        if (err) {
            res.send(err);
        } else {
            if (req.body.location) {
                user.characterData.location = req.body.location;
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
