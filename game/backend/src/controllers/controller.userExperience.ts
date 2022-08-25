import { UserModel } from "../schemas/userSchema";

export const getCharExperience = async (req: any, res: any) => {
    //find the user by ID and return the inventory
    UserModel.findById(req.params.id, function(err: any, user: any) {
        if (err) {
            res.send(err);
        } else {
            res.json(user.characterData.experience);
        }
    });
}

export const saveCharExperience = async (req: any, res: any) => {
    //find the user by ID and return the inventory
    UserModel.findById(req.params.id, function(err: any, user: any) {
        if (err) {
            res.send(err);
        } else {
            if (req.body.experience) {
                user.characterData.experience = req.body.experience;
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
