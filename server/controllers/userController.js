const { User, validateRegister, validateLogin } = require('../models/user');
const bcrypt = require('bcrypt');

// Login User
exports.loginUser = async (req, res) => {
	try {
		const { error } = validateLogin(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ username: req.body.username });
		if (!user)
			return res.status(401).send({ message: "Invalid Username or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);

		if (validPassword) {
			console.log("Successfully compared passwords");
		} else {
			return res.status(401).send({ message: "Invalid Username or Password" });
		}

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "Logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
};

// Register User
exports.registerUser = async (req, res) => {
	try {
		const { error } = validateRegister(req.body);
		if (error)
			return res.status(400).json({ message: error.details[0].message });

		const user = await User.findOne({ username: req.body.username });
		if (user)
			return res.status(409).json({ message: "Username has already been used" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).json({ message: "User Created Successfully" });
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error" });
	}
};
