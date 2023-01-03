const User = require("../models/user");

exports.create = async (req, res) => {
  const { name, email, password } = req.body;

  const oldUser = await User.findOne({ email });
  if (oldUser)
    return res.status(401).json({ error: "This email is already is used" });

  const newUser = new User({ name, email, password });
  await newUser.save();

  // var transport = nodemailer.createTransport({
  //   host: "smtp.mailtrap.io",
  //   port: 2525,
  //   auth: {
  //     user: "f29863e00f4147",
  //     pass: "0df2fe5327c2cf"
  //   }
  // });

  res.status(201).json({ user: newUser });
};
