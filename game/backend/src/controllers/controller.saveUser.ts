import { UserModel } from "../schemas/userSchema";

export const saveCharData = async (req: any, res: any) => {
    // find user based on ID
    UserModel.findById(req.params.id, function(err: any, user: any) {
        if (err) {
            res.send(err);
        } else {
            user.characterData = req.body.characterData;
            user.save(function(err: any) {
                if (err) {
                    res.send(err);
                } else {
                    res.json({ message: "User updated!" });
                }
            });
        }
    });
}
