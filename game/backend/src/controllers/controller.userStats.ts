import { UserModel } from "../schemas/userSchema";

export const getCharHealth = async (req: any, res: any) => {
    //find the user by ID and return the inventory
    UserModel.findById(req.params.id, function(err: any, user: any) {
        if (err) {
            res.send(err);
        } else {
            res.json(user.characterData.health);
        }
    });
}

export const saveCharHealth = async (req: any, res: any) => {
    //find the user by ID and return the inventory
    UserModel.findById(req.params.id, function(err: any, user: any) {
        if (err) {
            res.send(err);
        } else {
            if (req.body.health) {
                user.characterData.health = req.body.health;
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

export const getCharMana = async (req: any, res: any) => {
    //find the user by ID and return the inventory
    UserModel.findById(req.params.id, function(err: any, user: any) {
        if (err) {
            res.send(err);
        } else {
            res.json(user.characterData.mana);
        }
    });
}


export const saveCharMana = async (req: any, res: any) => {
    //find the user by ID and return the inventory
    UserModel.findById(req.params.id, function(err: any, user: any) {
        if (err) {
            res.send(err);
        } else {
            if (req.body.mana) {
                user.characterData.mana = req.body.mana;
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

