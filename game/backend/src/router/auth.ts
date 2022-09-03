const router = require("express").Router();
import { UserModel } from "../schemas/userSchema";
import { registerValidation, loginValidation } from "../middleware/validation";
import bcrypt  from "bcryptjs";
import jwt from "jsonwebtoken";

router.post("/register", async (req: any, res: any) => {
	const { username, password, email } = req.body;
	const { error } = registerValidation(req.body);
	if (registerValidation(req.body).error) {
		return res
			.status(400)
			.send(error.details[0].message);
	}
	if (!username || !password || !email) {
		res.status(400).json({
			error: "Please provide a username, password and Email",
		});
	} else {
		const user = new UserModel({
			username,
			password,
			email,
		});
		try {
			//check if username already exists
			const userExists = await UserModel.findOne({
				username,
			});
			if (userExists) {
				return res.status(400).json({
					error: "Username already exists",
				});
			}
			//check if email already exists
			const emailExists = await UserModel.findOne({
				email,
			});
			if (emailExists) {
				return res.status(400).json({
					error: "Email already exists",
				});
			}

			//hash the passwords
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(
				password,
				salt
			);
			await user.save();
			res.status(200).json({
				message: "User created successfully",
			});
		} catch (err) {
			res.json({ message: err });
		}
	}
});

router.post("/login", async (req:any , res:any) => {
	const { username, password } = req.body;
	const { error } = loginValidation(req.body);
	if (loginValidation(req.body).error) {
		return res
			.status(400)
			.send(error.details[0].message);
	}

	if (!username || !password) {
		res.status(400).json({
			error: "Please provide a username and password",
		});
	} else {
		try {
			const user = await UserModel.findOne({
				username,
			});
			if (!user) {
				return res.status(400).json({
					error: "User does not exist",
				});
			}
			const validPass = await bcrypt.compare(
				password,
				user.password
			);
			if (!validPass) {
				return res.status(400).json({
					error: "Invalid password",
				});
			}

			//create and assign a token
			const token = jwt.sign(
				{ _id: user._id },
				process.env.TOKEN_SECRET as string,
			);
			res.header("auth-token", token).send(token);
		} catch (err) {
			res.json({ message: err });
			console.log(err)
		}
	}
});

module.exports = router;
