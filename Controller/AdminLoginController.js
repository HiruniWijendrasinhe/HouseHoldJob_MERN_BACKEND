import User from "../Models/User.js";

export const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // ADMIN CHECK (no database needed)
    const adminEmail = "lakshikahiruni20@gmail.com";
    const adminPassword = "200155904026";

    if(username === adminEmail && password === adminPassword) {
      return res.status(200).json({ message: "Admin login successful", role: "admin" });
    }

    // NORMAL USER LOGIN
    const user = await User.findOne({ Email: username.toLowerCase().trim() });
    if(!user) return res.status(400).json({ message: "User not found" });

    if(user.Password !== password) return res.status(400).json({ message: "Incorrect password" });

    res.status(200).json({ message: "Login successful", role: "user", user: { id: user._id, email: user.Email } });

  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
