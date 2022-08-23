import { UserModel } from "../schemas/userSchema";

export const getCharInventory = async (req: any, res: any) => {
    //find the user by ID and return the inventory
    UserModel.findById(req.params.id, function(err: any, user: any) {
        if (err) {
            res.send(err);
        } else {
            res.json(user.characterData.inventory);
        }
    });
}

export const saveCharInventory = async (req: any, res: any) => {
    //find the user by ID and return the inventory
    UserModel.findById(req.params.id, function(err: any, user: any) {
        if (err) {
            res.send(err);
        } else {
                if (req.body.inventory) {
                if ( !user.characterData.inventory ) {
                    user.characterData.inventory = {
                        "slot_01": "",
                        "slot_02": "",
                        "slot_03": "",
                        "slot_04": "",
                        "slot_05": "",
                        "slot_06": ""
                    };
                }
                user.characterData.inventory[req.body.slot] = req.body.inventory;
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
