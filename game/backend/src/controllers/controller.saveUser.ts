import { UserModel } from "../schemas/userSchema";

export const saveCharData = async (req: any, res: any) => {
    const { name, level, experience, health, mana, location, inventory, equipment } = req.body.characterData
    UserModel.findById(req.params.id, function(err: any, user: any) {
        if (err) {
            res.send(err);
        } else {
            const newCharData = {
                "name": name,
                "level": level,
                "experience": experience,
                "health": health,
                "mana": mana,
                "location": location,
                "inventory": inventory,
                "equipment": equipment
            };

            console.log(newCharData);

            user.characterData = newCharData;
            user.save(function(err: any) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(user);
                }
            });
        }
    });
}
