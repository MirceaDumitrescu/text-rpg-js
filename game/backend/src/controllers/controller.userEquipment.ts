import { UserModel } from "../schemas/userSchema";

export const getCharEquipment = async (req: any, res: any) => {
    //find the user by ID and return the inventory
    UserModel.findById(req.params.id, function(err: any, user: any) {
        if (err) {
            res.send(err);
        } else {
            res.json(user.characterData.equipment);
        }
    });
}

export const saveCharEquipment = async (req: any, res: any) => {
    //find the user by ID and return the inventory
    UserModel.findById(req.params.id, function(err: any, user: any) {
        if (err) {
            res.send(err);
        } else {
            if (req.body.equipment) {
                if ( !user.characterData.equipment ) {
                    user.characterData.equipment = {
                        "head": "",
                        "hands": "",
                        "chest": "",
                        "legs": "",
                        "feet": "",
                        "mainHand": "",
                        "offHand": ""
                    };
                }
                user.characterData.equipment[req.body.slot] = req.body.equipment;
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
